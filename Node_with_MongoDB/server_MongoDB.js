const http = require("http");

http.createServer(function(req, res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>My Server</h1>");
    res.end()
}).listen(2000);
console.log("Your Server is running")