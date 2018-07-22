var http = require('http');
var locale = require('locale');
var supported = new locale.Locales(["en", "ru", "uk"]);

var server = http.createServer(function(request, response) {
    var locales = new locale.Locales(request.headers["accept-language"]);
    response.writeHead(200, {"Content-Type": "text/html"});
    var bestLocale = locales.best(supported);

    if (bestLocale == "ru") {
        response.end("Привет мир! Ваш язык: " + bestLocale);
    }
    else if (bestLocale == "uk") {
        response.end("Прывит мыру! Ваша мова: " + bestLocale);
    }
    else {
        response.end("Hello World! Your language: " + bestLocale);
    }

});

var port = process.env.PORT || 1337;
server.listen(port);