const http = require("http");

http.createServer(function(req,res) {
	res.write("Intial nodejs exercise");
	res.end();

}
).listen(3000);

console.log("server started on port 3000);

