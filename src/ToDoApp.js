import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { TodoList } from './components/TodoList';
import { TodoAdd } from './components/TodoAdd';

import 'bootswatch/dist/minty/bootstrap.min.css'
import './ToDoApp.css'



const init = () => {

  return JSON.parse(localStorage.getItem('todos')) || []

  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Aprender react',
  //   done: false
  // }]  

}


export const ToDoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  const handleDelete = (todoId) => {
    console.log(todoId);

    const actionDelete = {
      type: 'delete',
      payload: todoId
    };

    dispatch(actionDelete)

  }


  const handleToggle = (todoId) => {

    dispatch({
      type: 'toggle',
      payload: todoId
    })


  }


  const handleAddTodo = (newTodo) => {

    dispatch({
      type: 'add',
      payload: newTodo
    });


  }

  const handleReset = () => {
    todos.map(todo => (
      handleDelete(todo.id)
    ))

  }




  return <>

    <h1>ToDo List ({todos.length})</h1>

        <TodoAdd
          handleAddTodo={handleAddTodo}
        />

        <TodoList
          todos={todos}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />



      <button onClick={handleReset} className='btn btn-secondary mt-3'>CLEAR ALL</button>
  </>;

};
