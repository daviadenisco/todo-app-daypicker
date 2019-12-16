import React, {useState} from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import TodoForm from './TodoForm';
import Todo from './Todo';
import {checkDueTodayTomorrow, checkOverdue} from './helpers';
import moment from 'moment';
import './App.css';
import { setState } from 'expect/build/jestMatchersObject';

let currentId = 1; 

const options = [  
  { value: 'complete', label: 'Complete' },
  { value: 'dueTodayTomorrow', label: 'Due soon' },
  { value: 'overdue', label: 'Overdue' },
  { value: 'viewAll', label: 'View all' },
]

const initialFormValues = {
  title: 'TEST TITLE',
  date: moment(new Date()).format('YYYY-MM-DD'),
  description: 'TEST DESCRIPTION',
};

const initialTodos = [
  {
    title: 'Build TODO app',
    date: '12/6/2019',
    description: 'Must be super cool, lots of bells and whistles. Use Material UI but first learn more about React with Yuriy!',
    completed: false,
    id: currentId++
  },
  {
    title: 'Errands',
    date: '12/04/2019',
    description: 'TJ for dinner stuff and chicken for Ralphie, fold laundry and put it away, schedule doctor appointment checkup and dental cleaning for Rich and me.',
    completed: false,
    id: currentId++
  },
  {
    title: 'Pack storage and holiday items',
    date: '12/20/2019',
    description: 'Clothing and shoes for storage; sewing machine for project with Kim, and holiday gifts so we do not need to carry them on the train on Christmas Day.',
    completed: false,
    id: currentId++
  }
]

function App() {
  const [values, setValues] = useState(initialFormValues);
  const [todos, setTodos] = useState(initialTodos);
  const [selectedFilter, setSelectedFilter] = useState('viewAll');

  const addTodo = () => {
    const newTodos = [...todos, { ...values, completed: false, id: currentId++ }];
    setTodos(newTodos);
    setValues(initialFormValues);
  }

  function addNewTodo(e) {
    const value = e.target.value;

    setValues({
      ...values,
      [e.target.name]: value,
      completed: false,
    })
  }

  function toggleCheckbox(id) {
    // don't do this, all it does is create a shallow copy
    /*const updatedTodos = [...todos]
    for (let i = 0; i < updatedTodos.length; i++) {
      if (updatedTodos[i].id === id && !updatedTodos[i].completed) {
        updatedTodos[i].completed = true;
      } else {
        updatedTodos[i].completed = false;
      }
    }*/

    // instead, do this, which creates a new array that you can use to update state
    const updatedTodos = todos.map(todo =>{
      if (todo.id !== id){
        return todo;
      }
      return {
        ...todo,
        completed: !todo.completed
      }
    })
    console.log('updatedTodos: ', updatedTodos)
    setTodos(updatedTodos);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    
    setTodos(updatedTodos);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (values.title && values.date && values.description) {
      addTodo()
    } else {
      alert('A task must contain a title, description, and a due date. Please add the required information and then submit.')
    }
  }

  const handleFilterSelect = option => {
    // console.log('option:', option)
    setSelectedFilter(option.value)
  }

  let altText = null

  return (
    <div id='app'>
      <h1>TODO List</h1>
      <form id='form' onSubmit={handleSubmit}>
        <TodoForm addTodo={addTodo} currentId={currentId} addNewTodo={addNewTodo} values={values} />
      </form>
      <div id='filter'>
        <Dropdown options={options} onChange={handleFilterSelect} value={selectedFilter} placeholder="Select an option" />
      </div>
      <ul className='todo-list'>
        {todos.filter(todo => {
          // altText = ''
          if (selectedFilter === 'overdue') {
            // if (checkOverdue(todo) === false) {
            //   altText = 'Nothing overdue, keep up the good work!';
            // } else {
            //   altText = ''
            // }
            return checkOverdue(todo);
          }
          if (selectedFilter === 'dueTodayTomorrow') {
            // if (checkDueTodayTomorrow(todo) === false) {
            //   altText = 'Nothing due soon, go have some fun!';
            // }
            return checkDueTodayTomorrow(todo);
          }
          if (selectedFilter === 'complete') {
            // if (todo.completed === false) {
            //   altText = "Nothing is complete, yet. Select 'View All' and tackle something on your list today!";
            // }
            return todo.completed;
          }
            // altText = '';
          return true;
        }).map((todo, index) => (
          <Todo key={todo.id} index={index} todo={todo} toggleCheckbox={toggleCheckbox} removeTodo={removeTodo} />
        ))}
        <p>{altText}</p>
      </ul>
    </div>
  );
}

export default App;
