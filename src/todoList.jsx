const TodoList = ({ todos, toggleDone, deleteTodo }) => {

  const formatDate = (dateTime) => {
    const formattedDate = dateTime.replace('T', ' ');
    const [date, time] = formattedDate.split(' ');
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year} ${time}`;
  };

  // Trier les tâches par date
  const sortedTodos = todos.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

  return (
    <div id='todos'>
      <h2>Todos</h2>
      {sortedTodos.map((task) => (
        <li key={task.id}> 
          <div className="task-text">
            <input
              type="checkbox"
              id={`todo-${task.id}`} 
              checked={task.done === "Done"}
              onChange={() => toggleDone(task.id)} 
            />
            <label htmlFor={`todo-${task.id}`}></label>
            <p>{task.text}</p>
            <button className="delete-btn" onClick={() => deleteTodo(task.id)}>
              ❌
            </button>
          </div>
          <div className="task-date">
            <em>{formatDate(task.dateTime)}</em>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
