const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(function (req, res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - not found')
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - Server error');
});

app.listen(app.get('port'), function () {
  console.log('Express started at Port ' +
    app.get('port'))
});