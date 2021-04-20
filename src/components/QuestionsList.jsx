import Question from "./Question";
import uuid from "react-uuid";
import { useState, useEffect } from "react";

const QuestionsList = ({ questions }) => {
  const [questionsListHeight, setQuestionsListHeight] = useState("0px");

  useEffect(() => {
    // TODO: There has got to be a better way
    const navBarHeight = window
      .getComputedStyle(document.getElementById("navheader", null))
      .getPropertyValue("height");

    setQuestionsListHeight(`calc((100vh - ${navBarHeight}) - 1rem)`);
  }, []);

  const formatQuestion = (question) => {
    if (question.item) {
      return {
        title: question.item.title,
        contentPreview: question.item.contentPreview,
        tags: question.item.tags,
      };
    }

    return {
      title: question.title,
      contentPreview: question.contentPreview,
      tags: question.tags,
    };
  };

  return (
    <div
      className="flex-grow w-1/2 overflow-scroll scrollbar-none"
      style={{ height: questionsListHeight }}
    >
      {questions.length > 0 ? (
        questions.map((question) => (
          <div key={uuid()} className="mb-4">
            <Question
              title={formatQuestion(question).title}
              contentPreview={formatQuestion(question).contentPreview}
              tags={formatQuestion(question).tags}
            />
          </div>
        ))
      ) : (
        <p className="text-center">No Question Matched Your Criteria...</p>
      )}
    </div>
  );
};

export default QuestionsList;
