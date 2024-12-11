const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((task) => (
          <li key={task.index}>
            <input
              type="checkbox"
              id={`todo-${task.index}`}
              checked={task.done === "Done"}
              onChange={() => toggleDone(task.index)}
            />
            <label htmlFor={`todo-${task.index}`}>
              {task.text}: <em>({task.done === "Done" ? "Done" : "To Do"})</em>
            </label>
            <button onClick={() => deleteTodo(task.index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;