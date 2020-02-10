import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  
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

]


class App extends Component {
  render() {
    return (

      <div>
        {
        customers.map(c => { return (
            <Customer
            key={c.id} //map을 사용할때는 key라는 것을 추가로 넣어야 된다. 각 오브젝트마다 다른 고유의 값을 넣어야된다.
            id = {c.id} image = {c.image}  name={c.name} 
            birthday={c.birthday} gender={c.gender}  job={c.job}
            />
          )
        })
        }

      </div>
     
    );

  }
}


export default App;
