import React, { useState } from 'react';
import DayPickerComponent from './DayPickerComponent';
import 'react-day-picker/lib/style.css';
import './App.css';

import 'react-day-picker/lib/style.css';
  
function TodoForm({addTodo}) {
  const initialState = {
    title: '',
    due_date: '',
    description: '',
    completed: false
  }

  const [state, setState] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    // if (state.title && state.due_date && state.description) {
      addTodo(state.title, state.due_date, state.description)
    // } else {
    //   alert('A task must contain a title, description, and a due date. Please add the required information and then submit.')
    // }
    resetInput();
  }

  function handleChange(e) {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  function resetInput () {
    setState(initialState);
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      <div>
        <span className='title'>Title: </span>
        <input type='text' className='input' name='title' value={state.title} onChange={handleChange} />
      </div>
      <div>
        <span className='title'> Due Date: </span>
        {/* <input type='text' className='input' name='due_date' value={state.due_date} onChange={handleChange} /> */}
        <DayPickerComponent selectedDay />
      </div>
      <div>
        <span className='title'>Description: </span>
        <input type='text' className='input' name='description' value={state.description} onChange={handleChange} />
        
        <span id='add-button' className='add-button-wrapper'>
          <button id='add-button-appearance'>
            +
          </button>
          <span className='add-button-tooltiptext'>add</span>
        </span>
      </div>
    </form>
  )
}

export default TodoForm;