import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todos_actions';

const initialState = {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      done: false
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      done: true
    },
  };

  //this const is just for testing purposes
  //dont even wurrboutit
  const newTodos = 
    [ {
      id: 7,
      title: 'practice typing',
      body: 'with style',
      done: true
    },
    {
      id: 82,
      title: 'breaking things',
      body: 'moving fast',
      done: false
    },
  ];

const todosReducer = (state = initialState, action)=>{
  Object.freeze(state);

  let nextState = Object.assign({},state);
  
  switch (action.type) {
    case RECEIVE_TODOS:
      //we have to deal with the array of todos
      let cleanState = {};
      
      action.todos.forEach( todo => (
        cleanState[todo.id] = todo
      ) );
      return cleanState;

    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    default:
      return state;
  }
};


export default todosReducer;
