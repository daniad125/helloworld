var http=require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end('<HTML><BODY><H1>Hello world!</H1></BODY></HTML>');
}).listen(3000);
console.log('Сервер запущен на localhost:3000; нажмите Ctrl-C для завершения')
