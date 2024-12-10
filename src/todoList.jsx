import { useState } from 'react'

const TodoList = ({ todos }) => {
  const [tasks, setTasks] = useState(todos);

  const updateDone = (index) => {
    const updatedTasks = tasks.map(task => {
      if (task.index === index) {
        return {
          index: task.index,
          text: task.text,
          done: task.done === 'Not Done' ? 'Done' : 'Not Done'
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.index}>
            <input
              type="checkbox"
              id={`todo-${task.index}`}
              checked={task.done === 'Done'}
              onChange={() => updateDone(task.index)}
            />
            <label htmlFor={`todo-${task.index}`}>
              {task.text}: <em>({task.done === 'Done' ? 'Done' : 'To Do'})</em>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;