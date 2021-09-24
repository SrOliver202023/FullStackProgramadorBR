const http = require('http');
let port = 3000;

http.createServer((request, response) =>{
    response.writeHead(200, {'Content-Type': 'aplicattion/json'});
    response.end('<h1>Hello World!</h1>');
}).listen(3000, (err)=> err?console.log(err):console.log("Server running..."));