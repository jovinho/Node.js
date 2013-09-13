var http = require('http');
var server = http.createServer(function(request,response){
	response.writeHead(200, {"Content-Type":"text/html"});
	if(request.url == "/"){
		response.write("<h1> Página Principal");
	}else if (request.url == "/bemvindo"){
		response.write("<h1> Bem Vindo </h1>");
	}else{
		response.write("<h1> 404 : Page Not Found");
	}
	response.end();
});

server.listen(3000, function(){
	console.log("Server running!");
});