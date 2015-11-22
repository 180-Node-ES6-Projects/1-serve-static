import http from 'http';
import fs  from 'fs';
let port = 18000;
let server = http.createServer(function(req,res){
	let split = req.url.split('?');
	let url = split[0];
	let params = split[1];
	if(url === '/'){
		url = "index.html";
	}
	console.log(url);
	res.writeHead('text/html');
	fs.readFile(__dirname+'/public/'+url,function(err,cnt){
		if(!err){
			res.write(cnt);
			res.end();
		}else{
			res.end("404 - page not found");
		}
	});	
});
server.listen(port,function(){
	console.log("Server listening on port ",port);
});