let express = require('express');
let path = require('path');

let port = process.env.PORT || 3000;
let app = express();

app.get('/', function (req, res ) {
  res.send('Hi');
});

app.listen(port, function () {
  console.log('Server running on port: ' + port)
});
