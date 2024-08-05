const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (request, response, next) => {
  const products = adminData.products;
  response.render('shop', {prods: products, docTitle: 'Shop'})
});

module.exports = router;
