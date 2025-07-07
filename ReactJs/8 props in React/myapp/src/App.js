import React from 'react';

function FunctionalComponent(props){
  return (<>
  {/* {console.log(props)} */}
    <h2>Functional Component</h2>
    <table border='1' cellspacing='0' cellpadding='5'>
      <tr>
          <th>S.No</th>
          <th>BookName</th>
          <th>AuthorName</th>
          <th>Price</th>
      </tr>
      {
        props.book.map((obj,index)=>{
          return(<>
            <tr>
            <td>{index+1}</td>
            <td>{obj.name}</td>
            <td>{obj.author}</td>
            <td>{obj.price}</td>
          </tr>
          </>)
        })
      }
    </table>
  </>);
}
class ClassComponent extends React.Component{
  render(){
    return (<>
    <h2>Class Component</h2>

    <table border='1' cellspacing='0' cellpadding='5'>
      <tr>
          <th>S.No</th>
          <th>BookName</th>
          <th>AuthorName</th>
          <th>Price</th>
      </tr>
      {
        this.props.book.map((obj,index)=>{
          return(<>
            <tr>
            <td>{index+1}</td>
            <td>{obj.name}</td>
            <td>{obj.author}</td>
            <td>{obj.price}</td>
          </tr>
          </>)
        })
      }
    </table>

    </>);
  }
}
const bookArray = [
  {
    name : "C Programming",
    author : "Dennis Ritchie",
    price : 30000
  },
  {
    name : "C++ Programming",
    author : "Bjarne Strostrup",
    price : 40000
  },
  {
    name : "Java Programming",
    author : "James Gosling",
    price : 50000
  },{
    name : "Html",
    author : "Tim Berners Lee",
    price : 60000
  }
];
function App(){
  return (<>
      <FunctionalComponent book = {bookArray}/>
      <ClassComponent book = {bookArray}/>
  </>);
}

export default App;
