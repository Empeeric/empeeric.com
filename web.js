var express = require('express');

var app = express.createServer(express.logger());

app.get('/static/*', function(request, response) {
    response.sendfile('static/' + request.params[0]);
});

app.get('/he/*', function(request, response) {
    response.redirect('http://sobo.empeeric.com' + request.url, 301);
});
app.get('/widget/*', function(request, response) {
    response.redirect('http://sobo.empeeric.com' + request.url, 301);
});
app.get('/robots.txt', function(request, response){
    response.contentType('text/plain');
    response.sendfile('static/robots.txt');
});
app.get('/favicon.ico', function(request, response){
    response.contentType('image/vnd.microsoft.icon');
    response.sendfile('static/favicon.ico');
});

app.get('/BrowserSupport.html', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/BrowserSupport.html');
});

app.get('/j14countdown.html', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/j14countdown.html');
});

app.get('/', function(request, response){
    response.contentType('text/html');
    response.sendfile('templates/home.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});
