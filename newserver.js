const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb+srv://testuser:B2usPpjfRDfvcEWx@coffeeshop.tkunn.mongodb.net/CoffeeShop");
//.then((result) => console.log('connected to db'))
//.catch((err) => console.log(err));
app.listen(3000);


