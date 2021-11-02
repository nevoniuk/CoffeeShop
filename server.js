const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://testuser:B2usPpjfRDfvcEWx@coffeeshop.tkunn.mongodb.net/CoffeeShop"
);

app.get("/", function(req, res) {
    res.send("express is working");
})

//app.post

app.listen(3000, function() {
    console.log("server is running on 3000");

});

