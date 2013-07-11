'use strict';
var
    nodestrum = require('nodestrum'),
    coffee = require('coffee-script-redux/lib/register'),
    express = require('express'),
    contact_us = require('./contact_us'),
    https = require('https'),
    checks = require('./checks');

var app = express();
app.use(nodestrum.domain_wrapper_middleware);
app.use(express.bodyParser());
app.use(express.errorHandler());
app.use('/static/', express.static('./static'));

app.use(function powered_by_empeeric(req, res, next){
    res.setHeader('X-Powered-By', 'Empeeric');
    next();
});

app.get('/BrowserSupport.html', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/BrowserSupport.html');
});

app.get('/j14countdown.html', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/j14countdown.html');
});

app.get('/platereader', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/plate.html');
});

app.get('/ejs_test', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/ejs_test.html');
});

app.get('/', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/home.html');
});

app.post('/contact_us', contact_us.handle_request);


app.get('/check/mongolab/:key', checks.mongolab);


app.get('/snippet/cors/:id', function (req, orig_res) {
    orig_res.header('Access-Control-Allow-Origin', '*');
    orig_res.header('Access-Control-Allow-Methods', 'GET');
    orig_res.header('Access-Control-Allow-Headers', 'Content-Type');
    https.get('https://gist.github.com/refack/' + req.params.id + '/raw', function(https_res) {
        https_res.pipe(orig_res);
    });
});


var port = process.env.PORT || 80;
app.listen(port, function(){
  console.log("Listening on " + port);
});
