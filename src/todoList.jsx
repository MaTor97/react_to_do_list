const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  // Trier les todos par date
  const sortedTodos = todos.slice().sort((a, b) => {
    const dateA = new Date(a.dateTime).getTime();
    const dateB = new Date(b.dateTime).getTime();
    return dateA - dateB;
  });

  return (
    <div id="todos">
      <h2>Todos</h2>
      {sortedTodos.map((task) => {
        // Format de la date sans le 'T'
        const formattedDate = task.dateTime.replace('T', ' ');

        return (
          <li key={task.id}>
            <input
              type="checkbox"
              id={`todo-${task.id}`}
              checked={task.done === "Done"}
              onChange={() => toggleDone(task.id)}
            />
            <label htmlFor={`todo-${task.id}`}>
              {task.text} <em>{formattedDate}</em>
            </label>
            <button onClick={() => deleteTodo(task.id)}>Delete</button>
          </li>
        );
      })}
    </div>
  );
};

export default TodoList;
