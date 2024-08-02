const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "add-product.html"));
});

// /admin/add-product => POST
router.post("/add-product", (request, response, next) => {
  products.puch({ title: request.body.title });
  response.redirect("/");
});

exports.route = router;
exports.products = products;
