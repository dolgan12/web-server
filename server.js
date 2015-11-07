var middleware = require('./middleware.js');
var express = require('express');

var port = process.env.PORT || 3000;

var app = express();

app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication ,function (req, res) {
    res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));
app.listen(port, function () {
    console.log('Express server started on port ' + port + '!');
});