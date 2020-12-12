import React from "react";
import dataSet from "../api/dataSet";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";

class Questionier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      correct: 0,
      incorrect: 0,
      isFinished: false,
      dataSet: dataSet
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({
        correct: this.state.correct + 1
      });
    } else {
      this.setState({
        incorrect: this.state.incorrect + 1
      });
    }
    if (this.state.current == this.state.dataSet.length - 1) {
      this.setState({
        isFinished: true
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }
  }
  render() {
    return (
      <div>
        <p className="heading"> Quiz</p>
        <QuizArea
          handleClick={this.handleClick}
          isFinished={this.state.isFinished}
          correct={this.state.correct}
          dataSet={this.state.dataSet[this.state.current]}
        />
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
      </div>
    );
  }
}

export default Questionier;
