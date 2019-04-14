var express = require('express');
var app = express();
var fs = require('fs');
const path = require('path');
var http = require('http');
var https = require('https');
var key = fs.readFileSync('../server.key'); // your private key
var cert = fs.readFileSync('../server.crt'); // your certificate file
var options = {
  key: key,
  cert: cert,
};

https.createServer(options, app).listen(443);
http.createServer(app).listen(80); // spawn on 80 for redirects
app.use(function(req, res, next) {
  if (req.secure) {
    next();
  } else {
    res.redirect('https://' + req.headers.host + req.url); // enable 80 -> 443 redirect
  }
});

app.use(express.static(path.join(__dirname, 'build'))); // link to the static directory
app.get('/*', function(req, res) { // start the server and redirect all subdomains at / to the underlying react app
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
