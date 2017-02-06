import React, { Component } from 'react'

class Editor extends Component {
  render () {
    return (
      <textarea className='editor' onInput={this.handleInput} />
    )
  }
  handleInput () {
    this.props.onEdit()
  }
}

export default Editor
