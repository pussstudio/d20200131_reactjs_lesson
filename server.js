const fs = require('fs') //파일에 접근할 수 있는 라이브러리
const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 5000;

server.use(bodyParser.json());
// server.use('api', require('./routes/api'));
server.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

server.get('/api/customers', (req, res)=>{
  connection.query(
    "SELECT * FROM CUSTOMER",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});



server.listen(5000, (err) => {   
    console.log(`The server is running --- ${port}`);
});
