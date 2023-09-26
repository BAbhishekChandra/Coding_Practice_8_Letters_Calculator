// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', lengthOfPharse: 0}

  onChangeFindLength = event => {
    // console.log(event.target.value)
    const inputValue = event.target.value
    this.setState({searchInput: inputValue})
    this.setState({lengthOfPharse: inputValue.length})
  }

  render() {
    const {searchInput, lengthOfPharse} = this.state
    // console.log(searchInput)
    // console.log(lengthOfPharse)

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="calculator-container">
            <h1 className="heading">
              Calculate the <br />
              Letters you
              <br /> enter
            </h1>
            <label className="input-title" htmlFor="inputElement">
              Enter the phrase
            </label>
            <input
              className="input-element"
              type="text"
              id="inputElement"
              onChange={this.onChangeFindLength}
              value={searchInput}
            />

            <p className="result-element">No.of letters: {lengthOfPharse}</p>
          </div>
          <div className="image-container">
            <img
              className="letters-calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
