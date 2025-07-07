import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
        .then(arr => { setData(arr) })
          .catch(error => {
            console.log("Error : "+error);
          })   
  },[]);
  return (<>
      <center>
        <h2>Records</h2>
      </center>
      <table border='1' cellSpacing="0" cellPadding="20">
          <tr>
            <th>S.No</th>
            <th>UserId</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
          {
            data.map((obj,index)=>{
              return(<tr>
                  <td>{index+1}</td>
                  <td>{obj.userId}</td>
                  <td>{obj.id}</td>
                  <td>{obj.title}</td>
                  <td>{obj.body}</td>
              </tr>);
            })
          }
      </table>
  </>);
}

export default App;
