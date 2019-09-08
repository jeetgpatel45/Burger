var express = require("express");
var bodyparser = require("body-parser");
var exhbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json);

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})