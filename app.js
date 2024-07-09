const http = require("http");
const express = require("express");
const bodyParse = require("body-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (request, response, next) => {
  response.send("<h1>Add product page</h1>");
});

app.post("/product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

app.use("/", (request, response, next) => {
  response.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
