const http = require("http");
const express = require("express");

const app = express();

app.use("/add-product", (request, response, next) => {
  console.log("In the middleware");
  response.send("<h1>Add product page</h1>");
});

app.use("/", (request, response, next) => {
  console.log("In the middleware");
  response.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
