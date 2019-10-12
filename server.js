
var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
  console.log("listening at localhost:" + PORT);
});