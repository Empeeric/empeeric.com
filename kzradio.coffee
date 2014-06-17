request = require('request')
cheerio = require('cheerio')
async = require('async')
format = require('util').format;
moment = require('moment')

KZRADIO_BASE_URL = "http://kzradio.net/"
WEIRD_CHAR = String.fromCharCode(8211);
WEIRD_CHAR_REGEX = new RegExp('\s*[' + WEIRD_CHAR + '\\-]\s*');



module.exports.current = (cb) ->
  request KZRADIO_BASE_URL, (error, response, body) ->
    throw error if error
    throw new Error("status " + response.statusCode) unless response.statusCode is 200
    current = {};
    $ = cheerio.load(body)
    $show = $('.show-contents')
    $splash = $show.find('.special-splash')
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
    $show.find('h3 span').each (i, el) ->
      $el = $(el)
      id = $el.attr('id')
      val = if ~id.indexOf('datetime') then moment($el.text(), 'YYYYMMDDHHmm').toString() else $el.text()
      current[id] = val
    current.items = []
    $show.find('.item-track, .item-gen').each (i, el) ->
      $el = $(el)
      rawtime = $el.find('.track-time').text()
      time = if rawtime.length > 1 then rawtime else null
      rawtitle = $el.find('.item-title').text()
      [title, label] = if rawtitle && ~rawtitle.indexOf('//') then rawtitle.split(/\s*\/\/\s*/) else [rawtitle, null]
      [artist, track] = if title && ~title.search(WEIRD_CHAR_REGEX) then title.split(WEIRD_CHAR_REGEX) else [title, null]
      current.items.push
        raw: rawtitle
        artist: artist
        track: track
        label: label
        time: time
    cb(null, current)
