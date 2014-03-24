request = require('request')
cheerio = require('cheerio')
async = require('async')
format = require('util').format;

KZRADIO_BASE_URL = "http://kzradio.net/"


module.exports.current = (cb) ->
  request KZRADIO_BASE_URL, (error, response, body) ->
    throw error if error
    throw new Error("status " + response.statusCode) unless response.statusCode is 200
    $ = cheerio.load(body)
    $show = $('.show-contents')
    $show.find('.avatars, #content-container, .item-blah').remove();
    $splash = $show.find('.special-splash')
    $show.append($splash.find('img'));
    $splash.remove();
    $show.find('h3 span').each (i, el) ->
      $el = $(el);
      $show.prepend('<pre id='+ $el.attr('id') + '>' + $el.text() + '</pre>')
    cb($show.html())
