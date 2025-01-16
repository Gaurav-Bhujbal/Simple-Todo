// Write your code here
import './index.css'

const TodoItem = props => {
  const {title, id} = props.todo
  const {deleteTodoItem} = props
  const deleteTodo = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="list">
      <p className="text">{title}</p>
      <button className="btn" onClick={deleteTodo} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
