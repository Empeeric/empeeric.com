// Generated by CoffeeScript 2.0.0-beta8
void function () {
  var async, cheerio, format, KZRADIO_BASE_URL, moment, request, WEIRD_CHAR, WEIRD_CHAR_REGEX;
  request = require('request');
  cheerio = require('cheerio');
  async = require('async');
  format = require('util').format;
  moment = require('moment');
  KZRADIO_BASE_URL = 'http://kzradio.net/';
  WEIRD_CHAR = String.fromCharCode(8211);
  WEIRD_CHAR_REGEX = new RegExp('s*[' + WEIRD_CHAR + '\\-]s*');
  module.exports.current = function (cb) {
    return request(KZRADIO_BASE_URL, function (error, response, body) {
      var $, $show, $splash, current;
      if (error)
        throw error;
      if (!(response.statusCode === 200))
        throw new Error('status ' + response.statusCode);
      current = {};
      $ = cheerio.load(body);
      $show = $('.show-contents');
      $splash = $show.find('.special-splash');
      current.title = $show.find('h1').text();
      current.subtitle = $show.find('h2').text();
      current.img = $splash.find('img').html();
      current['show-splash-meta-title'] = $show.find('.show-splash-meta-title').text();
      current['show-splash-meta-content'] = $show.find('.show-splash-meta-content').text();
      current['sm-show'] = $show.find('.sm-show').text();
      current['sm-channel'] = $show.find('.sm-channel').text();
      current['show-splash-meta-content'] = $show.find('.show-splash-meta-content').text();
      current['item-first-logo'] = $show.find('.item-first-logo').html();
      current['sm-chan-img'] = $show.find('.sm-chan-img').html();
      $show.find('h3 span').each(function (i, el) {
        var $el, id, val;
        $el = $(el);
        id = $el.attr('id');
        val = ~id.indexOf('datetime') ? moment($el.text(), 'YYYYMMDDHHmm').toString() : $el.text();
        return current[id] = val;
      });
      current.items = [];
      $show.find('.item-track, .item-gen').each(function (i, el) {
        var $el, artist, cache$, cache$1, label, rawtime, rawtitle, time, title, track;
        $el = $(el);
        rawtime = $el.find('.track-time').text();
        time = rawtime.length > 1 ? rawtime : null;
        rawtitle = $el.find('.item-title').text();
        cache$ = rawtitle && ~rawtitle.indexOf('//') ? rawtitle.split(/\s*\/\/\s*/) : [
          rawtitle,
          null
        ];
        title = cache$[0];
        label = cache$[1];
        cache$1 = title && ~title.search(WEIRD_CHAR_REGEX) ? title.split(WEIRD_CHAR_REGEX) : [
          title,
          null
        ];
        artist = cache$1[0];
        track = cache$1[1];
        return current.items.push({
          raw: rawtitle,
          artist: artist,
          track: track,
          label: label,
          time: time
        });
      });
      return cb(null, current);
    });
  };
}.call(this);
