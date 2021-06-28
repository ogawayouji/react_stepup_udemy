import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import axios from "axios"
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import Text from "./Text";
import UserProfile from "./UserProfile";
import { User } from "./types/user";

// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };
const user: User = {
  name: "ogawa",
  hobbies: ["映画", "ゲーム"]
}

function App() {
  // const [todos, setTodos] = useState<any>([]);
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      // console.log(res);
      res.data.map((todo)  => todo.completed)
      setTodos(res.data);
    });
  }
  return (
    <div className="App">
      <UserProfile user={user}/>
      <Text color="red" fontSize="18px"/>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        // <p>{todo.title}</p>
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed}/>
        // <Todo title={todo.title} userid={todo.userid}/>
      ))}
    </div>
  );
}

export default App;
