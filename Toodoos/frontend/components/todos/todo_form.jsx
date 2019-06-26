import React from 'react';


class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        body: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e) {
    this.setState({
      body: e.target.value
    });
  }
  render () {
    return (
    <form onSubmit={this.submitForm}>

      <label>Title:
        <input
          type="text" 
          value={this.state.title}
          onChange={this.updateTitle}  
        />
      </label>

      <label>Body:
        <textarea
          onChange={this.updateBody}
          value={this.state.body}
        >
        </textarea>
      </label>

      <input type="submit" value="SUBMIT!!!!" />

    </form>
    );
  }

  static uniqueId() {
    return new Date().getTime();
  }

  submitForm (e) {
    e.preventDefault();

    this.props.createTodo(this.state);
    this.setState({
      title: '',
      body: '',
    });

  }

}


export default TodoForm;