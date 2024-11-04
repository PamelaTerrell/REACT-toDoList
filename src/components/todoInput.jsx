// src/components/TodoInput.js
import React, { useState } from 'react';

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (inputValue) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default TodoInput;
