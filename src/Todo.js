import React from 'react';

function Todo({ todo, index }) {
    return (
      <div className='todo'>
        <li className='outer-box'>
  
          <div className='inner-box'>
  
            <div className='check-remove-div'>
              <span className='checkbox checkbox-wrapper'>
                <input type='checkbox' />
                <span className='checkbox-tooltiptext'>done</span>
              </span>
           
              <span className='remove-button wrapper'>
                <button className='remove-button-appearance'>
                  -
                </button>
                <span className='tooltiptext'>remove</span>
              </span>
            </div>
  
            <div className='title-details-div'>
              <div className='title-div'>
                <span className='title'>{todo.title} by {todo.due_date}</span>
              </div>
              <div className='details-div'>
                <span className='details'>Details: </span>
                <span>{todo.description}</span>
              </div>
            </div>
  
          </div>
        </li>
      </div>
    )
  }

  export default Todo;