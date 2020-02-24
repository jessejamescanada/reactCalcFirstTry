import React, { Component } from 'react'

 class CalcButton extends Component {

  onCalcClick = () => {
    this.props.calcHandler()
  }
  render() {
    return (
      <div>
        <button 
        onClick={this.onCalcClick}
        className="btn calcBTN">Calculate</button>
      </div>
    )
  }
}
export default CalcButton