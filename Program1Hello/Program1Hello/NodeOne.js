process.stdout.write("Hello\n");

console.log(process.env);
console.log(process.argv);
console.log(process.pid);
console.log(process.title);
console.log(process.uptime());
console.log(process.memoryUsage());
console.log(process.cwd);

var os = require('os');
console.log(os.hostname());

var request = require('request');
var stream = request('http://www.google.com');

stream.on('data', function (chunk) {
    console.log("chunk->>" + chunk);
});

