import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import * as todoAPIUtils from './utils/todoAPIUtils';

// const updatedList = todoAPIUtils.getTodos().then(todos);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // window.getTodos().then(todos => {
  // todos.forEach(todo => console.log(todo)) })

  // let todosArr = []
  // window.getTodos().then(todos => todos.forEach(todo => todosArr.push(todo) ) )
  // 
  // PreloadedState should look like this:
  // {
  //   todos: {
  //     1: {
  //       title: 'whatever',
  //       body: 'whatever'
  //     },
  //     2: {}
  //   }
  // }
  const store = configureStore();
  // const store = configureStore(todoAPIUtils.getTodos());
  window.store = store;
  window.createTodo = todoAPIUtils.createTodo;
  window.getTodos = todoAPIUtils.getTodos;


  ReactDOM.render(
    <Root store={store}/>,
    root
  );
});