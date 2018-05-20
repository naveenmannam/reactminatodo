import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
class AddTodo extends Component {
  state = {
    item: ''
  };

  onItemChange = e => {
    const val = e.target.value;
    if (!val) {
      this.setState({
        item: ''
      });
    } else {
      this.setState({
        item: val
      });
    }
  };

  addTodoItem = e => {
    e.preventDefault();
    this.props.todoAdd(this.state.item);
    this.setState({
      item: ''
    });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.addTodoItem}>
          <input
            type="text"
            value={this.state.item}
            onChange={this.onItemChange}
          />
          <button className="button">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
