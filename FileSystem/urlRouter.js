var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	var url = request.url;
	if(url == "/"){
		url = "index";
	}
	fs.readFile(__dirname + '/' + url + '.html', function(error, html){
		if (error){
			response.writeHead(404, {"Content-Type":"text/html"});
			response.write("<h1> PAGE NOT FOUND </h1>");
			response.end();
		}else{
			response.writeHead(200, {"Content-Type":"text/html"});
			response.write(html);
			response.end();
		}
	});
});

server.listen(3000,function(){
	console.log("Server Running");
});