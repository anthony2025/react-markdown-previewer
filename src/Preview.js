import React, { Component } from 'react'
const marked = require('marked')

class Preview extends Component {
  render () {
    return (
      <div className='preview' dangerouslySetInnerHTML={this.parse(this.props.text)} />
    )
  }
  parse () {
    return {__html: '<h1>hola</h1>'}
  }
}

export default Preview
