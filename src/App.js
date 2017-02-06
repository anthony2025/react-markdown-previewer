import React, { Component } from 'react'
import Editor from './Editor'
import Preview from './Preview'

class App extends Component {
  constructor () {
    super()
    this.state = {text: 'this is the initial state'}
    this.onEdit = this.onEdit.bind(this)
  }
  render () {
    return (
      <div className='app-container'>
        <Editor onEdit={this.onEdit} />
        <Preview text={this.state.text} />
      </div>
    )
  }
  onEdit () {
    this.setState({text: 'onEdit called'})
  }
}

export default App
