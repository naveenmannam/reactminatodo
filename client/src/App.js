import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import * as TodoAPI from './components/utils/TodoAPI';
import AddTodo from './components/addtodo';
import ListTodo from './components/listtodo';
class App extends Component {
  state={
    todos:[]
  }

  componentDidMount = () => {
    TodoAPI.getAll()
      .then(data => {
        this.setState({
          todos: data
        })
      })
  }

  todoAdd = (item) => {
    TodoAPI.addTodo(item)
      .then(() => {
        TodoAPI.getAll()
          .then(data => {
            this.setState({
              todos: data
            })
          })
      })
  }

  todoDel = (_id) => {
    const remain = this.state.todos.filter(todo => {
      return (todo._id !== _id)
    })
    TodoAPI.delTodo(_id)
      .then(() => {
        this.setState({
          todos: remain
        })
      })
  }

  todoUpdate = (_id, completed) => {
    TodoAPI.updateTodo(_id, completed)
      .then(() => {
        TodoAPI.getAll()
          .then(data => {
            this.setState({
              todos: data
            })
          })
      })
  }

  render() {
    return (
      <div className="App">
        <AddTodo todoAdd={this.todoAdd}/>
        <ListTodo todos={this.state.todos} todoDel={this.todoDel} todoUpdate={this.todoUpdate}/>
      </div>
    );
  }
}

export default App;