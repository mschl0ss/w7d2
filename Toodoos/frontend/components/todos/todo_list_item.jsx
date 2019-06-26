import React from 'react';

const TodoListItem = (props)=>(
 <li>
    <p>Title: {props.todo.title} </p>
    <p>Body: {props.todo.body} </p>
 </li>
)


export default TodoListItem