// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading"> SPEEDOMETER </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="speed-text"> Speed is 0mph </h1>
          <p className="speed-limits">
            {' '}
            Min Limit is 0mph, Max Limit is 200mph{' '}
          </p>
          <div className="buttons-container">
            <button type="button" className="accelerate-button button">
              {' '}
              Accelerate{' '}
            </button>
            <button type="button" className="apply-break-button button">
              {' '}
              Apply Brake{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
