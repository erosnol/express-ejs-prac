const express = require('express')

const app = express()
const PORT = 3001

// create root route
app.get('/welcome', (req, res) => {
    res.send(`<h1> Welcome! </h1>`)
})

// fruits array
const fruits = [{
        name: 'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'pear',
        color: 'green',
        readyToEat: false
    },
    {
        name: 'banana',
        color: 'yellow',
        readyToEat: true
    }
];


// fruits route 
app.get('/fruits', (req, res) => {
    console.log(fruits)
    // res.send(fruits)
})

// fruits route and creates new parameter
// :nameOfParameter
app.get('/fruits/:index', (req, res) => {
    console.log(req.params);
    res.send(fruits[req.params.index])
})

// BONUS
app.get('/fruits/search/:name', (req, res) => {
//  console.log(req.params.name);
 const results = fruits.filter(item => item.name === req.params.name)
 res.send(results)
})

// listener for port 
app.listen(PORT, () => {
    console.log(`Fruits server working....`);
})