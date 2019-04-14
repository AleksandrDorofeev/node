const http = require("http");

const express = require("express");

const routesHandler = require('./routes');

const app = express();

app.use((request, response, next) => {
  console.log("Middleware!");
  next();
});

app.use((request, response, next) => {
  console.log("next Middleware!")
});


const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//     routesHandler.routesHandler(req, res);
// });

server.listen(3006, "localhost", () =>
  console.log(`server running on port 3006`)
);