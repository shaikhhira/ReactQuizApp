import React from "react";
import Questionier from "./Questionier";
import "../styles.css";

class StartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      start: false
    };
  }

  quizStart() {
    this.setState({
      start: true
    });
  }

  render() {
    if (this.state.start == false) {
      return (
        <div>
          <h1
            style={{
              color: "purple",
              marginTop: "160px"
            }}
          >
            Ready for Javascript Quiz
          </h1>
          <button className="startBtn" onClick={() => this.quizStart()}>
            Start
          </button>
        </div>
      );
    }
    return (
      <div>
        <Questionier />
      </div>
    );
  }
}
export default StartPage;
