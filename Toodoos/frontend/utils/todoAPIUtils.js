

export const createTodo = todo => {
  return $.ajax ({
    method: 'post',
    url: '/api/todos',
    data: {todo},
  });
};

export const getTodos = () => {
  return $.ajax({
    method:'get', 
    url: '/api/todos',
  });
};