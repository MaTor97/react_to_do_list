
import './App.css'
import { useState } from 'react'
import TodoList from './todoList.jsx'
import Header from './header.jsx'


const App = () => {
  let initialTodos = localStorage.getItem('todolist') === null ? [] :JSON.parse(localStorage.getItem('todolist'));
  console.log(initialTodos)  
  const [todos, setTodos] = useState(initialTodos)
  
    return (
      <main>
        <h1>My Todo App</h1>
        <Header/>
        <TodoList todos={todos}/>
      </main>
    );
  };


export default App
