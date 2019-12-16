import React, { useEffect, useState } from 'react';
import {checkDueTodayTomorrow, checkOverdue} from './helpers';

function Todo({ todo, toggleCheckbox, removeTodo }) {
  const [isOverdue, setOverdue] = useState(false);
  const [isDueTodayTomorrow, setDueTodayTomorrow] = useState(false);

  // updates on page reload so dates and notifications are current
  useEffect(() => {
    setOverdue(checkOverdue(todo));
    setDueTodayTomorrow(checkDueTodayTomorrow(todo));
  }, [todo])

    return (
      <div className={'todo'}>
        <li 
          className={
            `outer-box 
            ${todo.completed ? 'completed' : ''}
            ${isOverdue ? 'overdue' : ''}
            ${isDueTodayTomorrow ? 'dueTodayTomorrow' : ''}
          `}>
          <div className='inner-box'>
            {isOverdue && <span className='notification'>Overdue!</span>}
            {isDueTodayTomorrow && <span className='notification'>Due soon!</span>}
            {todo.completed && <span className='notification'>Complete!</span>}
            <div className='check-remove-div'>
              <span className='checkbox checkbox-wrapper'>
                <input 
                  type='checkbox' 
                  onClick={e => toggleCheckbox(todo.id)} 
                />
                <span className='checkbox-tooltiptext'>done</span>
              </span>
              <span className='remove-button wrapper'>
                <button 
                  type='button' 
                  className='remove-button-appearance' 
                  onClick={e => removeTodo(todo.id)}
                >
                  x
                </button>
                <span className='tooltiptext'>remove</span>
              </span>
            </div>

            <div className='title-details-div'>
              <div className='title-div'>
                <span className='title'>{todo.title} by {todo.date}</span>
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