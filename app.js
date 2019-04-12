const http = require("http");
const routesHandler = require('./routes');

const server = http.createServer((req, res) => {
    routesHandler.routesHandler(req, res);
});

server.listen(3005, "localhost", () =>
  console.log(`server running on port 3005`)
);
