// Load express
const express = require('express');


const getData = require("./Controllers/getData");
const Products = require('./Models/Students');

// call getData
const storeData = getData();

// Create our express app
const app = express();


app.use((req, res, next) => {
  console.log(`Running middleware function!!!`);
  next(); // got to the next middleware or to the response
});

// JSON Middleware
app.use(express.json())
// if we dont need to read data from the url 
app.use(express.urlencoded({extended: false}))

// Setup view engine
app.set("view engine", "ejs");
app.set("views", "./Views");

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
  res.render("home", {
    pageTitle: "Students info",
    pageHeader: "Student info by Id or sort",
  });
});

// display all products
app.get('/', (req, res) => { 
  res.render("home", { data: storeData, pageTitle: "Products Page" });

});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3001, function () {
  console.log('Listening on port 3001');
});