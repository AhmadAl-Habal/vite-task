import React from "react";

const Question = ({ key, title, desc, operator }) => {
  return (
    <div className="question">
      <div className="first-row">
        <h1>{title}</h1>
        <h2>{operator}</h2>
      </div>
      <h3>{desc}</h3>
      <hr />
    </div>
  );
};

export default Question;
