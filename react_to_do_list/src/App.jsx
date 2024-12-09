import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let todos = ['Learn React', 'Be awesome!', 'Practice Javascript']

const MyTodo = () => {
  return (
    <main>
      <h1>My Todo App</h1>
      <Header />
      <Todos todos={todos}/>
    </main>
  );
};

const Header = () => {
  return (
    <div>
      <input type="text" placeholder="Type a new todo" />
      <button>Add Todo</button>
    </div>
  );
};

const Todos = () => {
  return (
    <div>
      <h2>Todos</h2>
      <Element  todos={todos}/>
    </div>
  );
};

const Element = () => {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input type="checkbox" id={`todo-${index}`} />
          <label htmlFor={`todo-${index}`}>{todo}</label>
        </div>
      ))}
    </div>
  );
};
function App() {
  return(
    <div>
      <MyTodo />
    </div>
  );
};

export default App
