const http = require("http");

require("dotenv").config();

let port = process.env.PORT;
let host = process.env.HOST;

let server = http.createServer((req, res) => {
    console.log("Server request is working!");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Yeah2!");
});
server.listen(port, host, () => {
    console.log(`Server is listening on ${host}:${port}`);
});