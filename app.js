var http = require('http');
var locale = require('locale');
var supported = new locale.Locales(["en_US", "en", "ru", "uk"]);

var server = http.createServer(function(request, response) {
    var locales = new locale.Locales(request.headers["accept-language"]);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! Your language: " + locales.best(supported));

});

var port = process.env.PORT || 1337;
server.listen(port);