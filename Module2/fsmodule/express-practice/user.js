const express = require('express')

const app = express()



//New Route

app.get('/hello', (req,res) => {
    res.send('Hello')
})

app.get('/hello/:name/:lastName', (req, res) => {
    res.send(`Hello ${req.params.name} ${req.params.lastName}`)
    console.log()
})

//app listen
app.listen(4000, () => {
    console.log(`Running.....`);
})