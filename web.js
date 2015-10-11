var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.configure(function() {
  app.use(express.static(path.join(__dirname, 'dist')));
});

app.listen(port);
