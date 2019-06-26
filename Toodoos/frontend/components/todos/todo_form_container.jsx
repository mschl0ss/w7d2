import TodoForm from './todo_form';
import {connect} from 'react-redux';
import { createTodo } from '../../actions/todos_actions';


const mapDispatchToProps = dispatch =>({
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(
  null, 
  mapDispatchToProps
)(TodoForm);
