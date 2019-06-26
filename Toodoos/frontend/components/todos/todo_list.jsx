import React from 'react';
import TodoListItem from './todo_list_item';
import TodoFormContainer from './todo_form_container';


class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log("this happened");
    this.props.getTodos();
  }
  
  render () {
    return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {this.props.todos.map((todo)=> <TodoListItem todo={todo} key = {todo.id} />)}
      </ul>
      <TodoFormContainer />
    </div>
    );
  }
}

export default TodoList;
// const TodoList = (props) => (
//   <div>
//     <h3>Todo List</h3>
//     <ul>
//       {props.todos.map((todo)=> <TodoListItem todo={todo} key = {todo.id} />)}
//     </ul>
//     <TodoFormContainer />
//   </div>
//  );

// export default TodoList;