class Api::TodosController < ApplicationController

  def index
    todos = Todo.all
    render json: todos
  end

  def create
    todo = Todo.new(todo_params)

    if todo.save
      render json: todo
    else
      render json: todo.errors.full_messages, status: 418
    end
  end


  private
  def todo_params
    params.require(:todo).permit(:title,:body)
  end
  
end
