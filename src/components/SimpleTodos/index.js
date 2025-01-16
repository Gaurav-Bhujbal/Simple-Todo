const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

class SimpleTodos extends Component {
  state = {
    todoArray: initialTodosList,
  }

  deleteTodo = id => {
    console.log('delete')
    const {todoArray} = this.state
    const filteredList = todoArray.filter(each => {
      return each.id !== id
    })
    this.setState({todoArray: filteredList})
  }
  render() {
    const {todoArray} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todo-container">
            {todoArray.map(each => {
              return (
                <TodoItem
                  key={each.id}
                  deleteTodoItem={this.deleteTodo}
                  todo={each}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
