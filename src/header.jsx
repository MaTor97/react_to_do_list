import { useState } from 'react'

const Header = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    addTodo(inputValue); 
    setInputValue(""); 
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Type a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </header>
  );
};

export default Header