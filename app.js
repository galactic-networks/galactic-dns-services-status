var express = require('express');
var app = express();
var locale = require('locale');
var supported = new locale.Locales(["en", "ru", "uk"]);

app.get('/', function (req, res) {
    var locales = new locale.Locales(req.headers["accept-language"]);
    var bestLocale = locales.best(supported);

    res.header("Content-Type", "text/html");

    var text_service_status;

    if (bestLocale == "ru") {
        text_service_status = '<pre><strong>Статус:</strong><br />&#9;Все сервисы <font color="green"><strong>ОНЛАЙН</strong></font> и работают без неполадок.<br /></br /></br /></br />';
    }
    else if (bestLocale == "uk") {
        text_service_status = '<pre><strong>Статус:</strong><br />&#9;Всі сервіси <font color="green"><strong>ОНЛАЙН</strong></font> та повністю працюють.<br /></br /></br /></br />';
    }
    else {
        text_service_status = '<pre><strong>Status:</strong><br />&#9;All services are <font color="green"><strong>ONLINE</strong></font> and fully operational.<br /></br /></br /></br />';
    }

    res.send(
        text_service_status +
        '<font size="2">Copyright &copy; 2018 Galactic Networks, Inc.</font></pre>'
    );
});

var port = process.env.PORT || 1337;

app.listen(port, function () {
    //console.log('Example app listening on port 1337!');
});