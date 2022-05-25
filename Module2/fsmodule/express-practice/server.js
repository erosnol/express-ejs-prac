// load the package express
const express = require('express')

//create an instance of express
const app = express()

//create our routes and handle our routes
app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello Express').status(200)
})



//homepage
app.get('/home', (req,res) => {
    res.send(`<h1> Home Page </h1>
                <p> this is my bio </p>
    `)
})

//about
app.get('/about', (req,res) => {
    res.send(`<h1> About me </h1>
            <p>lorem lorem lorem lorem lorem </p>
            
    `)
})

//listen for request
app.listen(3000, () => {
    console.log(`server is running`);
})