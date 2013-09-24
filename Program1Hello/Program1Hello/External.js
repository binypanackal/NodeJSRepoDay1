var count = 2;
module.exports.biny = count;

var myFunction = function (f1) {

    console.log("Inside External Function");
    setTimeout(f1, 5000);
    
    f1();
    setInterval(f1, 1000);
};

module.exports.myExternalFunction = myFunction;

var EventEmitter = require('events').EventEmitter;
var c = 10;
var getResource = function (c) {
    var e = new EventEmitter();
    process.nextTick(function () {
        var count = 0;
        e.emit('start');
        var t = setInterval(function () {
            e.emit('data', ++count);
            if (count == c) {
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
    return (e);
}

module.exports.getResource = getResource;
