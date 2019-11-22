import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './App.css';
import { setState } from 'expect/build/jestMatchersObject';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'Build TODO app',
      due_date: 'November 22, 2019',
      description: 'Must be built with all requirements.',
      completed: false
    },
    {
      title: 'Dinner',
      due_date: 'November 21, 2019',
      description: 'Make dinner and feed cats.',
      completed: false
    },
    {
      title: 'Laundry',
      due_date: 'November 21, 2019',
      description: 'Fold, put away, and start new laundry.',
      completed: false
    }
  ])

  const addTodo = (title, due_date, description) => {
    const newTodos = [...todos, { title, due_date, description, completed: false }];
    setTodos(newTodos);
  }

  return (
    <div id='app'>
      <h1>TODO List</h1>
        <TodoForm addTodo={addTodo}/>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
