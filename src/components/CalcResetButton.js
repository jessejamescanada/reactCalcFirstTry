import React, { Component } from 'react'

class CalcResetButton extends Component {

  onResetClick = () => {
    this.props.resetHandler()
  }
  render() {
    return (
      <div>
        <button 
        onClick={this.onResetClick}
        className="btn resetBTN">Reset</button>
      </div>
    )
  }
}

export default  CalcResetButton