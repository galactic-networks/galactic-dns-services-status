var express = require('express');
var app = express();
var locale = require('locale');
var supported = new locale.Locales(["en", "ru", "uk"]);

app.get('/', function (req, res) {
    var locales = new locale.Locales(req.headers["accept-language"]);
    var bestLocale = locales.best(supported);

    res.header("Content-Type", "text/html");

    var text_title;
    var text_dns_address;
    var text_service_status;
    var text_current_issues;

    if (bestLocale == "ru") {
        text_title = "Galactic DNS Статус";
        text_dns_address = '<pre><strong>DNS адрес:</strong><br />&#9;137.117.231.56 (впишите как Primary и Secondary DNS)<br /></br /></br />';
        text_service_status = '<strong>Статус:</strong><br />&#9;Все сервисы <font color="green"><strong>ОНЛАЙН</strong></font> и работают без неполадок.<br /></br /></br />';
        text_current_issues = '<strong>Текущие проблемы:</strong><br />&#9;- Spotify в данный момент не разрешает авторизироваться. Мы работаем над этим.';
    }
    else if (bestLocale == "uk") {
        text_title = "Galactic DNS Статус";
        text_dns_address = '<pre><strong>DNS адреса:</strong><br />&#9;137.117.231.56 (впишить як Primary та Secondary DNS)<br /></br /></br />';
        text_service_status = '<strong>Статус:</strong><br />&#9;Всі сервіси <font color="green"><strong>ОНЛАЙН</strong></font> та повністю працюють.<br /></br /></br />';
        text_current_issues = '<strong>Поточні проблеми:</strong><br />&#9;- Spotify поки що не дозволяє авторизуватися. Ми працюємо над цим.';
    }
    else {
        text_title = "Galactic DNS Status";
        text_dns_address = '<pre><strong>DNS Address:</strong><br />&#9;137.117.231.56 (set as both Primary and Secondary DNS)<br /></br /></br />';
        text_service_status = '<strong>Status:</strong><br />&#9;All services are <font color="green"><strong>ONLINE</strong></font> and fully operational.<br /></br /></br />';
        text_current_issues = '<strong>Current Issues:</strong><br />&#9;- Spotify currently does not let you log in. We are working on a fix.';
    }

    res.send(
        '<html><head><title>' + text_title + '</title></head><body>' +
        text_dns_address +
        text_service_status +
        text_current_issues +
        '<br /></br /></br /></br /></br /><font size="2">Copyright &copy; 2018 Galactic Networks, Inc.</font></pre></body></html>'
    );
});

var port = process.env.PORT || 1337;

app.listen(port, function () {
    //console.log('Example app listening on port 1337!');
});