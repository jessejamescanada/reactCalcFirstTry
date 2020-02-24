import React, { Component } from 'react'

class CalcHeader extends Component {
  render() {
    return (
      <div>
        <h1 className="calcHeader">{this.props.header.text}</h1>
      </div>
    )
  }
}

export default CalcHeader
