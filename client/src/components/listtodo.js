import React from "react";
import "../App.css";
import Todo from './todo';
const ListTodo = props => {
  return (
    <div className="todolist">
      {props.todos.length !== 0 ? <h2>List Items</h2> : null}
      <div className="items">
        <Todo todos={props.todos} todoDel={props.todoDel} todoUpdate={props.todoUpdate}/>
      </div>
    </div>
  );
};

export default ListTodo;
