import React from 'react';
import './App.css';
  
function TodoForm({addNewTodo, values}) {
  
  return (
    <div>
      <div>
        <span className='title'>Title: </span>
        <input type='text' className='input' placeholder='Add new todo' value={values.title} name='title' onChange={addNewTodo} />
      </div>
      <div>
        <span className='title'> Due: </span>
        <input type='date' className='input' value={values.date} name='date' onChange={addNewTodo} />
      </div>
      <div>
        <span className='title'>Description: </span>
        <input type='text' className='input' value={values.description} name='description' onChange={addNewTodo} />
        
        <span id='add-button' className='add-button-wrapper'>
          <button id='add-button-appearance'>
            +
          </button>
          <span className='add-button-tooltiptext'>add</span>
        </span>
      </div>
    </div>
  )
}

export default TodoForm;