
import './App.css'
import { useState, useEffect } from 'react'
import TodoList from './todoList.jsx'
import Header from './header.jsx'


const App = () => {
  const [todos, setTodos] = useState([]); 
  const [counter, setCounter] = useState(0); 

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
  const addTodo = ({ text, dateTime }) => {
    if (!text.trim()) return; // Ignore les tâches sans texte
  
    // Créer un identifiant unique basé sur la date et l'heure
    const timestamp = new Date(dateTime).getTime(); 
  
    const newTodo = {
      id: timestamp, 
      text: text, 
      dateTime: dateTime, 
      done: "Not Done",
    };
  
    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

  // Mettre à jour le statut d'une tâche
  const toggleDone = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: todo.done === "Done" ? "Not Done" : "Done" }; // Change "done" en fonction de l'état actuel
      }
      return todo;
    });
  
    setTodos(updatedTodos);  // Met à jour l'état des todos
    localStorage.setItem("todolist", JSON.stringify(updatedTodos)); // Enregistre dans le localStorage
  };
  

  // Supprimer une tâche
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((task) => task.id !== id); 
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };
  

  return (
    <main>
      <h1>Task Manager</h1>
      <Header addTodo={addTodo} />
      <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
    </main>
  );
};


export default App
