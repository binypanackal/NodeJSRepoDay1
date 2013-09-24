var myExternalModule = require('./External.js');

console.log(myExternalModule.biny);

var mainFunction = function () {
    console.log("Inside master function");
};

//myExternalModule.myExternalFunction(mainFunction);

var r = myExternalModule.getResource(5);

r.on('start', function () {
    console.log("started");
});


r.on('data', function (d) {
    console.log("Receaving data->"+d);
});



r.on('end', function (d) {
    console.log("End total of "+d);
});


var fs = require('fs');
var zlib = require('zlib');
var request = require('request');

request('http://www.google.com').pipe(fs.createWriteStream('google.html'));
request('http://www.google.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('google.html.gz'));


var http = require('http');

var req = http.request('http://www.google.com', function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
req.end();


var option = {
    host: 'www.microsoft.com',
    port: 80,
    path: '/',
    method: 'GET'
}

var req1 = http.request(option, function (response) {
    console.log(response.statusCode);
    response.pipe(process.stdout);
});
req1.end();
