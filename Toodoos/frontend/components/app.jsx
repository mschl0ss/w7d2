import React from 'react';
import TodoListContainer from './todos/todo_list_container';

const App = props => (
  <>
    <h1>App Component</h1>
    <TodoListContainer store={props.store}/>
  </>
);

export default App;