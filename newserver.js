const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Customer = require('./customer');
const app = express();

mongoose.connect("mongodb+srv://testuser:B2usPpjfRDfvcEWx@coffeeshop.tkunn.mongodb.net/CoffeeShop");
//.then((result) => console.log('connected to db'))
//.catch((err) => console.log(err));
app.listen(3000);
app.use(express.static('public'));

app.get('/add-customer', (req,res) => {
const customer = new Customer({
    username: req.body.username,
    password: req.body.password,
    name: req.body.firstname,
    email: req.body.email,
    account_type: "Customer"
  });
  customer.save()
    .then((result) => {
      res.send(result)
    })
  .catch((err) => {
    console.log(err);
  });
})

