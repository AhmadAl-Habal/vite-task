import React from "react";
import Question from "./Question.jsx";
import "./AskedQuestions.css";
const AskedQuestions = () => {
  let questions = [
    {
      title: "Can Conversix sync my data to my CRM?",
      desc: "Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.",
      operator: "+",
    },
    {
      title: "How much data will I receive?",
      desc: "",
      operator: "-",
    },
    {
      title: "Can marketers use Conversix data on behalf of client?",
      desc: "",
      operator: "-",
    },
    {
      title: "How accurate is my data?",
      desc: "",
      operator: "-",
    },
  ];
  return (
    <div className="content-container">
      <div className="asked-questions">
        <div className="frequently-asked">
          <h2>Frequently Asked Questions</h2>
          <h1>
            Any Questions? <br />
            Find here.
          </h1>
          <button>Send Message</button>
        </div>
        <div className="questions">
          {questions.map((ques) => (
            <Question
              key={ques.index}
              title={ques.title}
              desc={ques.desc}
              operator={ques.operator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AskedQuestions;
