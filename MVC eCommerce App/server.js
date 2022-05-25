// Load express
const express = require('express');

const getData = require("./Controllers/getData");
const Products = require('./Models/Products');
// call getData
const storeData = getData();

// Create our express app
const app = express();
const PORT = 3000;

// Middleware functions
// they update the request as soon as they come in.
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
app.get('/', function (req, res) {
    res.render("home", {
        pageTitle: "Home Page",
        pageHeader: "Welcome to the Apple Store 2.0",
      });
    });

// display all products
app.get('/products', (req, res) => { 
    res.render("products", { data: storeData, pageTitle: "Products Page" });
  
});

//HTML Form
app.get("/products/new", (req, res) => {
    res.render("new-products", {
        pageTitle: "New Product",
      });
    });

//Create new product
app.post('/products', (req, res) => {
    console.log(req.body);
    storeData.push(req.body)
    res.redirect("./products")
})



//Search by product id
app.get('/products/:id', (req, res) => {
  console.log(req.params);
  const result = products.filter(item => item.id === Number(req.params.id))
  
  res.render('productId', {product: result[0]})
})

//404 error
app.get('/products/jadgfjasddfj', function (req, res) {
  res.render("404", {
      pageTitle: "error",
      pageHeader: "404 error, page not found",
    });
  });


// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(PORT, function () {
  console.log('Listening on port 3000');
});