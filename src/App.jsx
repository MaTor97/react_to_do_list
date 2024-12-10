import { useState } from 'react'
import './App.css'



const MyTodo = () => {
  return (
    <main>
      <h1>My Todo App</h1>
      <Header />
      <Todos />
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
      <TodoList />
    </div>
  );
};

const TodoList = () => {
  let initialTodos = [{'index': 1, 'text': 'Learn React', 'done': 'Not Done'}]
  const [todos, setTodos] = useState(initialTodos)
  const [checked, setChecked] = useState(false)

  const updateDone = (index) => {
    setChecked(!checked)
    todos.map(todo => {
      index = todo.index && todo.done === 'Not Done' ? todo.done = 'Done' : todo.done = 'Not Done'
    })
  }
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.index}>
          <input type="checkbox" id={`todo-${todo.index}`} checked={checked} onChange={e => updateDone(todo.index)}/>
          <label htmlFor={`todo-${todo.index}`}>{todo.text}: <em>({todo.done})</em></label>
        </li>
      ))}
    </ul>
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
