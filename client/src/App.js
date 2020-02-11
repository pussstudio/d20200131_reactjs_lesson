import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})





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
    const {classes} = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
        <TableBody>
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
        </TableBody>

        </Table>
        

      </Paper>
     
    );

  }
}


export default withStyles(styles)(App);