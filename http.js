import http from "http";

http.createServer((req,res)=> {
  res.end("hello server");
}).listen(3000);
console.log("server is running on http://localhost:3000");
