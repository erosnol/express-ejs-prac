const fs = require('fs');


fs.writeFile('./notes.txt', 'Hello, world!', function(){
    console.log(`Done creating file`);
})
