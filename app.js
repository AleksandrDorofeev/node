const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req)
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello Node.js</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3005, "localhost", () => console.log(`server running on port 3005`));