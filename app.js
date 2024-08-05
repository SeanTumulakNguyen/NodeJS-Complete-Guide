const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const expressHandlebars = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.engine("handlebars", expressHandlebars())
app.set('view engine', 'handlebars');
app.set('view', 'views')

const rootDir = require("./util/path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);
