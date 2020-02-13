const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const port = process.env.PORT || 5000;

server.use(bodyParser.json());
// server.use('api', require('./routes/api'));
server.use(bodyParser.urlencoded({extended:true}));

server.get('/api/customers', (req, res)=>{
    res.send([
  
        {
        'id': 1,
        'image': 'http://placeimg.com/64/64/1',
        'name' : '홍길동',
        'birthday' : '961222',
        'gender' : '남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'http://placeimg.com/64/64/2',
        'name' : '단무지',
        'birthday' : '961222',
        'gender' : '여자',
        'job': '언론사'
      },
      {
        'id': 3,
        'image': 'http://placeimg.com/64/64/any',
        'name' : '이순신',
        'birthday' : '961222',
        'gender' : '남자',
        'job': '디자이너'
      }
      
      ]);
});


server.listen(5000, (err) => {   
    console.log(`The server is running --- ${port}`);
});
