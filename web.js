var express = require('express');
var app = express();

app.configure(function() {
  app.use(express.static(path.join(__dirname, 'dist')));
});

var port = process.env.PORT || 5000;
app.listen(port);
