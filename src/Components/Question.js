import React from "react";

function Question(props) {
  return (
    <div>
      <p className="question">{props.dataSet.question}</p>
    </div>
  );
}
export default Question;
