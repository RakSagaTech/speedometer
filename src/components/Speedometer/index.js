// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  render() {
    return (
      <div>
        <h1> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1> Speed is 0mph </h1>
        <p> Min Limit is 0mph, Max Limit is 200mph </p>
        <div>
          <button> Accelerate </button>
          <button> Apply Brake </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
