import { useState } from 'react'

const Header = () => {
    const [inputValue, setInputValue] = useState('')
    const [counter, setCounter] =  useState(0)

    const addValue = (event) => {
        setInputValue(event.target.value)
    }

    const addStorage = () => {
        let storedList = localStorage.getItem("todolist");
        let todolist = storedList ? JSON.parse(storedList) : [];
        
        let todo = {
            'index': counter + 1,
            'text': inputValue,
            'done': 'Not Done'
        };

        todolist.push(todo);
    
        localStorage.setItem("todolist", JSON.stringify(todolist));
    
        setCounter(counter + 1);
    };
    

    return (
      <div>
        <input type="text" placeholder="Type a new todo" onChange={addValue}/>
        <button onClick={addStorage}>Add Todo</button>
      </div>
    );
  };

export default Header