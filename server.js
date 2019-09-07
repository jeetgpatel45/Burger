var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var exhbs = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgers_controller');
app.use(routes);


app.listen(PORT, function(){
    console.log("Listening on PORT: " + PORT);
})