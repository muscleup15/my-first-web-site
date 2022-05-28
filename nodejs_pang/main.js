var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
var _url = request.url;
var queryData = url.parse(_url, true).query;
var title = queryData.id;
if(_url =='/'){
  title = 'Welcome';
}
if (_url == '/favicon.ico'){
response.writeHead(404);
response.end();
return;
}
response.writeHead(200);
fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
  var template =`<!doctype html>
  <html>
  <head>
  <title>WEB1 - ${title}</title>
  <meta charset = "utf-8">
  </head>
  <body>
  <h1><a href = "/">나는 무슨 운동을 했는가</a></h1>
  <ol>
    <li><a href = "/?id=헬스">헬스 </a></li>
    <li><a href = "/?id=크로스핏">크로스핏</a></li>
    <li><a href = "/?id=클라이밍">클라이밍</a></li>
    <a href = "https://namu.wiki/w/%EC%95%94%EB%B2%BD%EB%93%B1%EB%B0%98"target ="_blank" title = "climbing def">클라이밍이란?</a>
  </ol>
  <h2> ${title} </h2>
  <strong>헬스,<u>크로스핏, 클라이밍</u></strong>을 하고 있는 <br>안광휘입니다.
  <p>${description}</p>
  </body>
  </html>
  `;
  response.end(template);
})
});
app.listen(3000);
