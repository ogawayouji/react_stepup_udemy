import React from 'react'
import "./styles.css";
import axios from 'axios';

export default function App() {
  const onClickUsers = () => {
    // alert('users');
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=> {
      console.log(res.data);
    }).catch((err) => console.log(err));
  };

  const onClickUser1 = () => {
    // alert('user1')
    axios.get("https://jsonplaceholder.typicode.com/users/1").then((res)=> {
      console.log(res.data);
    }).catch((err) => console.log(err));
  }
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  )
}

