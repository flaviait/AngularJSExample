var gzippo = require('gzippo');
var express = require("express");

var app = express();

app.use(gzippo.staticGzip("" + __dirname + "/dist"));
var port = Number(process.env.PORT || 9000);
app.listen(port, function () {
    console.log("Listening on " + port);
});