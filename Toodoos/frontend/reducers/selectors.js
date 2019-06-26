import React from 'react';

export const allTodos = ({ todos }) => {
  // return Object.keys(todos).map( id => todos[id] )

  // const result = [];
  // Object.keys(todos).forEach( todoKey => {
  //   result.push(todos[todoKey] );
  // });
  // return result;

  return Object.values(todos);


};