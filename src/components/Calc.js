import React, { Component } from "react";
import "./Calc.css";
import CalcHeader from "./CalcHeader";
import CalcButton from './CalcButton'
import CalcResetButton from './CalcResetButton'

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "%",
      valueOne: "",
      valueTwo: "",
      calculatedList: [],
      netItem: "",
      name: ''
    };
  }

  handleNum1Change = e => {
    this.setState({ valueOne: e.target.value });
  };
  handleNum2Change = e => {
    this.setState({ valueTwo: e.target.value });
  };

  calculate = () => {

    if(this.state.valueOne === '' || this.state.valueTwo === ''){
      return false;
    }else{
    // create unique ID for each value
    const newItem = {
      id: 1 + Math.random(),
      value:
        ((this.state.valueOne / this.state.valueTwo) * 100).toFixed(2) + "%"
    };
    // copy list 1st
    const calculatedList = [...this.state.calculatedList];
    // push
    calculatedList.push(newItem);

    this.setState({
      value:
        ((this.state.valueOne / this.state.valueTwo) * 100).toFixed(2) + "%",
      valueOne: "",
      valueTwo: "",
      calculatedList: calculatedList
    });
  }
  };

  reset = () => {
    // copy list 1st
    const calculatedList = [...this.state.calculatedList];
    // set copy of list to empty by length = 0
    calculatedList.length = 0;

    this.setState({
      value: "%",
      valueOne: "",
      valueTwo: "",
      calculatedList: calculatedList
    });
  };

  deleteListItem = id => {
    // copy of list 1st
    const calculatedList = [...this.state.calculatedList]
    // filter items that dont match id clicked and list those new items
    const updatedList = calculatedList.filter(item => item.id !==id);
    this.setState({calculatedList: updatedList})

    // change display values to either % or last item
    if(updatedList === undefined || updatedList.length === 0){
      this.setState({value: '%'})
    }else if(updatedList.length !== 0){
      let sliced = updatedList.slice(-1)[0];
      this.setState({value: sliced.value })
    }
  };
  render() {
    return (
      <div className="calc">
        <CalcHeader header={{text: "React Calculator"}}/>
        <div className="result">{this.state.value}</div>
        <div className="calcInputContainer">
          <label>What was your score?</label>
          <input
            onChange={this.handleNum1Change}
            type="number"
            placeholder="Enter a number.."
            className="calc1Input"
            value={this.state.valueOne}
          />
          <label>How many questions?</label>
          <input
            onChange={this.handleNum2Change}
            type="number"
            placeholder="Enter a number.."
            className="calc2Input"
            value={this.state.valueTwo}
          />
          <CalcButton calcHandler={this.calculate.bind(this)}/>
          <CalcResetButton resetHandler={this.reset.bind(this)}/>
          {/* <button onClick={this.calculate} className="btn calcBTN">
            Calculate
          </button> */}
          {/* <button onClick={this.reset} className="btn resetBTN">
            Reset
          </button> */}
          <ul className="uList">
            {this.state.calculatedList.map(item => {
              return (
                <li className="calculatedListItem" key={item.id}>
                  {item.value}
                  <button
                    className="deleteBTN2"
                    onClick={() => this.deleteListItem(item.id)}
                  >
                    X
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Calc;
