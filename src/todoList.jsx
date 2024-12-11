const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  return (
    <div id='todos'>
      <h2>Todos</h2>
        {todos.map((task) => (
          <li key={task.index}>
            <input
              type="checkbox"
              id={`todo-${task.index}`}
              checked={task.done === "Done"}
              onChange={() => toggleDone(task.index)}
            />
            <label htmlFor={`todo-${task.index}`}>
              {task.text}
            </label>
            <button onClick={() => deleteTodo(task.index)}>Delete</button>
          </li>
        ))}
    </div>
  );
};

export default TodoList;