import TodoList from './todo_list';
import { connect } from 'react-redux';
import { allTodos } from '../../reducers/selectors';
import { getTodos, receiveTodo } from '../../actions/todos_actions';

const mapStateToProps = (state)=>({
  todos: allTodos(state) //Object.values(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  getTodos: () => dispatch(getTodos())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(TodoList);

// module.exports = () => <h3>Todo List goes here</h3>

