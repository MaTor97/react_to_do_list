
import './App.css'
import { useState, useEffect } from 'react'
import TodoList from './todoList.jsx'
import Header from './header.jsx'


const App = () => {
  const [todos, setTodos] = useState([]); // Liste des tâches
  const [counter, setCounter] = useState(0); // Compteur pour assigner des indices uniques

  // Charger les tâches initiales depuis le localStorage
  useEffect(() => {
    const storedList = localStorage.getItem("todolist");
    if (storedList) {
      const parsedList = JSON.parse(storedList);
      setTodos(parsedList);
      // Met à jour le compteur en fonction du plus grand index
      let maxIndex = 0;
      for (let task of parsedList) {
        if (task.index > maxIndex) {
          maxIndex = task.index;
        }
      }
      setCounter(maxIndex);
    }
  }, []);

  // Ajouter une tâche
  const addTodo = (text) => {
    if (!text.trim()) return; // Ignore les entrées vides

    const newTodo = {
      index: counter + 1,
      text: text,
      done: "Not Done",
    };

    const updatedTodos = todos.concat(newTodo); // Ajoute sans spread
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
    setCounter(counter + 1);
  };

  // Mettre à jour le statut d'une tâche
  const toggleDone = (index) => {
    const updatedTodos = [];
    for (let task of todos) {
      if (task.index === index) {
        updatedTodos.push({
          index: task.index,
          text: task.text,
          done: task.done === "Not Done" ? "Done" : "Not Done",
        });
      } else {
        updatedTodos.push(task);
      }
    }
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

  // Supprimer une tâche
  const deleteTodo = (index) => {
    const updatedTodos = [];
    for (let task of todos) {
      if (task.index !== index) {
        updatedTodos.push(task);
      }
    }
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

  return (
    <main>
      <h1>Todo App</h1>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    </main>
  );
};


export default App
