'use strict';
require('nodestrum');
var
    express = require('express'),
    contactUs = require('./contact_us'),
    https = require('https'),
    checks = require('./checks'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    errorHandler = require('error-handler'),
    etagify = require('etagify'),
    errorRender = require('errorhandler'),
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

var port = process.env.PORT || 80;
app.listen(port, function () {
    console.log("Server listening on %s", this._connectionKey);
});
