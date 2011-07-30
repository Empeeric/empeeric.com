var express = require('express');

var app = express.createServer(express.logger());

app.get('/static/*', function(request, response) {
    console.log("file " + request.params[0]);
    response.sendfile('static/' + request.params[0]);
});

app.get('/', function(request, response){
    response.sendfile('templates/home.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});
