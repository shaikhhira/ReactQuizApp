import React from "react";
import AnswerList from "./AnswerList";
import Question from "./Question";
import UserFail from "./UserFail";
import UserPass from "./UserPass";

function QuizArea(props) {
  if (props.isFinished) {
    if (props.correct >= 2) {
      return <UserPass />;
    } else {
      return <UserFail />;
    }
  }
  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}
export default QuizArea;
