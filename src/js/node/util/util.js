var os = require('os'),
    util = {};

var wirelessName = ['en1', 'en4', 'wlan0', 'en0'];
util.getWlanIp = function() {
    var ifaces = os.networkInterfaces(),
        ip = undefined;
    wirelessName.forEach(function(name) {
        var wl = ifaces[name];
        if (wl) {
            wl.forEach(function(val) {
                if (val.family == 'IPv4') {
                    ip = ip || val.address;
                }
            });
        }
    });
    return ip;
};



module.exports = util;