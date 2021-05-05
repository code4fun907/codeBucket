import Question from "./Question";
import uuid from "react-uuid";
import useHeight from "../../hooks/useHeight";

const QuestionsList = ({ questions }) => {
  const questionsListHeight = useHeight();

  const contentPreview = (question) =>
    question.body.length < 100 ? question.body : question.body.slice(0, 99);

  return (
    <div
      className="flex-grow w-1/2 overflow-scroll scrollbar-none"
      style={{ height: questionsListHeight }}
    >
      {questions.length > 0 ? (
        questions.map((question) => (
          <div key={uuid()} className="mb-4">
            <Question
              title={question.title}
              contentPreview={contentPreview(question)}
              tags={question.tags}
              likes={question.likes}
              comments={question.comments}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No Questions Found</p>
      )}
    </div>
  );
};

export default QuestionsList;
