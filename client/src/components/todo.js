import React from 'react'
import "../App.css";

const Todo = (props) => {
  return (
    <div>
      {
        props.todos.map(todo =>{
          return (
              <p className="textleft"
                key={todo._id}>
                <input type="checkbox" checked={todo.completed}
                  onChange={() => props.todoUpdate(todo._id, (!todo.completed))}
                />
                <span className={"mainitem " + (todo.completed ? 'check' : null)}>{todo.item}</span>
                <span onClick={() => props.todoDel(todo._id)}><i className="fas fa-trash textright"></i></span>
              </p>
          )
        })
      }
    </div>
  )
}

export default Todo
