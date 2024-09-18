// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerateSpeed = () => {
    this.setState(prevState =>
      prevState.speed !== 200 ? {speed: prevState.speed + 10} : {speed: 200},
    )
  }

  applyBrakes = () => {
    this.setState(prevState =>
      prevState.speed !== 0 ? {speed: prevState.speed - 10} : {speed: 0},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="page-container">
        <h1 className="heading">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image-set"
        />
        <h1 className="speed-msg">Speed is {speed}mph</h1>
        <p className="details">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelarator-btn"
            onClick={this.accelerateSpeed}
            type="button"
          >
            Accelerate
          </button>
          <button
            className="brake-btn"
            onClick={this.applyBrakes}
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
