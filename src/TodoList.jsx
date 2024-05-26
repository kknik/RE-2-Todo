
import React, { useState } from 'react';
import Todo from './Todo';


const TodoList = () => {
    
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="todo-list">
      <h1>Todo App</h1>
      <div className="input-group">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo} onUpdate={updateTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
