import React, { useState } from 'react';
import './Todo.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const availableTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="App">
      <div className="head">
        <header>
          <h1>My Library</h1>
        </header>
      </div>
      <div className="body">
        <div className="two">
          <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter what to do." />
          <button onClick={addTask}>+</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
              <button onClick={() => removeTask(index)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="foot">
        <footer>
          <h1>Available Tasks: {availableTasks}</h1>
          <h1>Tasks Done: {completedTasks}</h1>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
