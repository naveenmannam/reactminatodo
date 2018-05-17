const api = 'http://localhost:5001/api'

export const getAll = () => {
  return fetch(`${api}/todos`)
          .then(res => res.json())
          .then(data => data)
}

export const addTodo = (item) =>{
  return fetch(`${api}/todos`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({item})
          })
          .then(res => res.json())
}

export const updateTodo = (_id, completed) => {
  return fetch(`${api}/todos/${_id}`,
    {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({completed})
    }
  )
  .then(res => res.json())
}

export const delTodo = (_id) => {
  return fetch(`${api}/todos/${_id}`,
  {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  }
  )
  .then(res => res.json())
}