const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 5000;

server.use(bodyParser.json());
// server.use('api', require('./routes/api'));
server.use(bodyParser.urlencoded({extended:true}));


server.get('/api/hello', (req, res)=>{
    res.send({message: 'Hello Express!'});
});

server.listen(5000, (err) => {   
    console.log(`The server is running --- ${port}`);
});
