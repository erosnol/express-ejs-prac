const { log } = require('console')
const express = require('express')
const fs = require('fs')

const app = express()

app.engine('myFirstViewEngine', (filePath, options, callback) => {
    fs.readFile(filePath, (err, data) => {
        //if the file not found, give error
        if (err) return callback(err)

        //if we have no errors
        const rendered = data.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>')
        
        // call callback with no errors and some data rendered
        return callback(null, rendered)
    })
})

//sets the views engine in express "setting the engine"
app.set('view engine', 'myFirstViewEngine')
app.set('views', './views')


// call 
app.get('/', (req, res) => {
    res.render('home', {
        title: 'hello world',
        message: 'My first view engine',
        content: 'some content'
    })
})

// get server running 
app.listen(3000, () => {
    console.log('running...');
})