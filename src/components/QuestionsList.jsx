import Question from "./Question";
import { useState, useEffect } from "react";

const QuestionsList = ({ questions }) => {
  const [questionsListHeight, setQuestionsListHeight] = useState("0px");

  useEffect(() => {
    // TODO: There has got to be a better way
    const navBarHeight = window
      .getComputedStyle(document.getElementById("navheader", null))
      .getPropertyValue("height");

    setQuestionsListHeight(`calc((100vh - ${navBarHeight}) - 1rem)`);
  });

  return (
    <div
      className="flex-grow w-1/2 overflow-scroll"
      style={{ height: questionsListHeight }}
    >
      {questions.map((question) => (
        <div key={question.id} className="mb-4">
          <Question
            title={question.title}
            contentPreview={question.contentPreview}
          />
        </div>
      ))}
    </div>
  );
};

export default QuestionsList;
