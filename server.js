const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://testuser:B2usPpjfRDfvcEWx@coffeeshop.tkunn.mongodb.net/CoffeeShop");

//create customer schema
const CustomerSchema = {
    username: String,
    password: String,
    name: String,
    email: String,
    account_type: String
}

const Customer = mongoose.model("Customer", CustomerSchema);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    let newCustomer = new Customer({
        username: req.body.username,
        password: req.body.password,
        name: req.body.firstname,
        email: req.body.email,
        account_type: "Customer"
    });
    newCustomer.save();
    res.redirect('/');
})

app.listen(3000, function() {
    console.log("server is running on 3000");

});



