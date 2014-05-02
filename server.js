'use strict';
require('nodestrum');
var
    express = require('express'),
    https = require('https'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    errorHandler = require('error-handler'),
    etagify = require('etagify'),
    errorRender = require('errorhandler'),
    request = require('request'),
    ua = require('universal-analytics'),
    cache = require('memory-cache'),
    contactUs = require('./contact_us'),
    checks = require('./checks'),
    kzradio = require('./kzradio');

var app = express();
app.use(errorRender());
app.use(etagify());
app.use(logger('dev'));
app.use(express.static('assets', {maxAge: Infinity}));
app.use(function (req, res, next) {
    errorHandler(req, res);
    next();
});
app.use(
    function powered_by_empeeric(req, res, next) {
        res.setHeader('X-Powered-By', 'Empeeric');
        next();
    }
);


app.get('/platereader', function (request, response) {
    response.etagify();
    response.contentType('text/html');
    response.sendfile('templates/plate.html');
});


app.get('/ejs_test', function (request, response) {
    response.etagify();
    response.contentType('text/html');
    response.sendfile('templates/ejs_test.html');
});


app.get('/heroku', function (request, response) {
    response.etagify();
    response.contentType('text/html');
    response.sendfile('templates/heroku.html');
});


app.post('/su_tcontac', bodyParser(), contactUs.handle_request);


app.get('/check/mongolab/:key', checks.mongolab);


app.get('/snippet/cors/:id', function (req, orig_res) {
    orig_res.header('Access-Control-Allow-Origin', '*');
    orig_res.header('Access-Control-Allow-Methods', 'GET');
    orig_res.header('Access-Control-Allow-Headers', 'Content-Type');
    https.get('https://gist.github.com/refack/' + req.params.id + '/raw', function (https_res) {
        https_res.pipe(orig_res);
    });
});


app.get('/api/kzradio/current', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    kzradio.current(function (show) {
        res.json(show);
    });
});


app.head('/api/formage/checkVer', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send(200);
});
app.get('/api/formage/checkVer',
    function getLatest(req, res, next) {
        var CACHE_KEY = 'formage-latest';
        var latest = cache.get(CACHE_KEY);
        if (latest) {
            req.params.latest = latest;
            next();
            return;
        }
        request('http://registry.npmjs.org/formage/latest', function (_, __, body) {
            var ver = JSON.parse(body);
            var latest = ver.version;
            cache.put(CACHE_KEY, latest, 3600);
            req.params.latest = latest;
            next();
        });

    },
    function (req, res) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        var tracker = ua('UA-15378843-1');
        var clientVer = req.query.version;
        tracker.event("formage", "ping", clientVer).send(function (err, x) {
            if (err) console.log(err);
        });
        res.json(req.params.latest);
    }
);


var port = process.env.PORT || 80;
app.listen(port, function () {
    console.log("Server listening on %s", this._connectionKey);
});
