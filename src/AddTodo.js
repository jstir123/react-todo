import React, {Component} from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    e.target.reset()
  }
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content">Add new todo:</label>
          <input name="content" type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default AddTodo
