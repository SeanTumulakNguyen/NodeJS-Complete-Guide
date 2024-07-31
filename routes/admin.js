const express = require("express");

const router = express.Router();

router.get("/add-product", (request, response, next) => {
  response.send("<h1>Add product page</h1>");
});

router.post("/product", (request, response, next) => {
  console.log(request.body);
  response.redirect("/");
});

module.exports = router;
