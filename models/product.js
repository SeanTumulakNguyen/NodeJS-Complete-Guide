const fs = require("fs");
const path = require("path");

const products = [];

const root = require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(root, "data", "products.json");
    fs.readFile(p, (err, fileContent) => {});
    products.push(this);
  }

  static fetchAll() {
    return products;
  }
};
