import { useState } from 'react'

const Header = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState(""); // Texte de la tâche
  const [timeInputValue, setTimeInputValue] = useState(""); // Date et heure

  const handleAdd = () => {
    if (!inputValue.trim() || !timeInputValue) {
      alert("Veuillez fournir une tâche et une date valide.");
      return;
    }

    addTodo({
      text: inputValue,
      dateTime: timeInputValue, 
    });

    // Réinitialiser les champs
    setInputValue("");
    setTimeInputValue("");
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Type a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="datetime-local"
        id="start"
        name="task-date"
        value={timeInputValue} // Lier au state
        onChange={(e) => setTimeInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </header>
  );
};

export default Header;
