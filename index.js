const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// __dirname is an explicit path

app.listen(3000, () => {
    console.log('Hello');

})

