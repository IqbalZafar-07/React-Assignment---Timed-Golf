import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0, startTime: 0 };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handeleventlistner = this.handeleventlistner.bind(this);
    this.tick = this.tick.bind(this);
  }
  buttonClickHandler() {
    document.addEventListener("keydown", this.handeleventlistner);
    clearInterval(this.timerID);
    this.setState({
      time: 0,
      x: 0,
      y: 0,
      startTime: Date.now(),
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick() {
    if (!(this.state.x == 250 && this.state.y == 250)) {
      let timePassed = Date.now() - this.state.startTime;
      let sec = Math.floor(timePassed / 1000);
      this.setState({
        time: sec,
      });
    }
  }
  handeleventlistner(e) {
    let code = e.keyCode;

    if (code == 39 && !(this.state.x == 250 && this.state.y == 250)) {
      this.setState({
        x: this.state.x + 5,
        y: this.state.y,
      });
    }
    if (code == 37 && !(this.state.x == 250 && this.state.y == 250)) {
      this.setState({
        x: this.state.x - 5,
        y: this.state.y,
      });
    }
    if (code == 38 && !(this.state.x == 250 && this.state.y == 250)) {
      this.setState({
        x: this.state.x,
        y: this.state.y - 5,
      });
    }
    if (code == 40 && !(this.state.x == 250 && this.state.y == 250)) {
      this.setState({
        x: this.state.x,
        y: this.state.y + 5,
      });
    }
    if (this.state.x == 250 && this.state.y == 250) {
      clearInterval(this.timerID);
      document.removeEventListener("keydown", this.handeleventlistner);
    }
  }
  render() {
    return (
      <>
        <div className="playground">
          <div
            className="ball"
            style={{
              position: "absolute",
              top: this.state.y + "px",
              left: this.state.x + "px",
            }}
          ></div>
          <button className="start" onClick={this.buttonClickHandler}>
            Start timer
          </button>
          <div className="hole"></div>
          <div className="heading-timer">{this.state.time}</div>
        </div>
      </>
    );
  }
}

export default Timer;
