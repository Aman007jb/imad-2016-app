var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article.html'));
});

app.get('/article-one', function (req, res) {
  res.send('Article one is here');
});

app.get('/article-two', function (req, res) {
  res.send('Article two is here');
});

app.get('/article-three', function (req, res) {
  res.send('Article three is here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', "https://static.independent.co.uk/s3fs-public/styles/article_large/public/thumbnails/image/2016/04/04/10/lionel-messi.jpg"));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
