import React, { Component } from 'react'

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }
  render() {
    return (
          <form onSubmit={this.props.addItem}>
          
            <input 
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
<button class="btn-floating btn-large waves-effect waves" type="submit"><i class="material-icons">add</i></button>            
          </form>
    )
  }
}

export default TodoList