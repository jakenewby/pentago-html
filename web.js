var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/rules', function(req, res) {
  res.sendFile(__dirname + '/dist/rules.html');
});

app.listen(port);
