export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
import * as TodoAPIUtils from '../utils/todoAPIUtils';
//todos is an array
export const receiveTodos = (todos)=> ({
   type: RECEIVE_TODOS,
   todos
});

export const receiveTodo = (todo)=> ({
   type: RECEIVE_TODO,
   todo
});

export const createTodo = (todo) => (dispatch, getState) => {
   
   return TodoAPIUtils.createTodo(todo)
      .then(newTodo => dispatch(receiveTodo(newTodo)));

};

export const getTodos = () => (dispatch, getState) => {

   return TodoAPIUtils.getTodos()
      .then(todos => dispatch(receiveTodos(todos)));
}

