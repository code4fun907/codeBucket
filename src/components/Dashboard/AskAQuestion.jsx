import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import Input from "../ui/Input";
import ReactMarkdown from "react-markdown";
import YourQuestions from "./YourQuestions";
import { useState } from "react";
import { useQuestion } from "./contexts/Question";

const AskAQuestion = () => {
  const { currentAskingQuestion, setCurrentAskingQuestion } = useQuestion();
  const [previewShowing, setPreviewShowing] = useState(false);
  const [yourQuestionsShowing, setYourQuestionsShowing] = useState(false);

  const togglePreview = () =>
    setPreviewShowing((previewShowing) => !previewShowing);

  return (
    <>
      <div className="md:hidden">
        <button
          className={`p-2 text-white rounded mr-2 ${
            yourQuestionsShowing ? "bg-blue-200" : "bg-blue-400"
          }`}
          onClick={() => setYourQuestionsShowing(false)}
        >
          ask a question
        </button>
        <button
          className={`p-2 text-white rounded mr-2 ${
            yourQuestionsShowing ? "bg-blue-400" : "bg-blue-200"
          }`}
          onClick={() => setYourQuestionsShowing(true)}
        >
          your questions
        </button>
      </div>
      {!yourQuestionsShowing ? (
        <>
          <h1 className="mt-2 text-xl">Ask a question</h1>
          <TextInfo className="mb-4">
            make sure to ask a descriptive question
          </TextInfo>
          <Input type="text" text="Title" />
          <TextInfo>make sure to use a descriptive title</TextInfo>
          <h1 className="mt-4 text-gray-600">Question</h1>
          <TextInfo className="mb-1">
            any valid markdown is valid here!
          </TextInfo>
          <button
            className="p-2 mb-2 text-xs text-white bg-blue-400 rounded w-28"
            onClick={togglePreview}
          >
            toggle preview
          </button>

          {previewShowing ? (
            <Card className="w-full h-full p-2 overflow-scroll bg-white rounded scrollbar-none">
              <ReactMarkdown className="markdown">
                {currentAskingQuestion}
              </ReactMarkdown>
            </Card>
          ) : (
            <Card className="h-full">
              <textarea
                placeholder="type some markdown and it will be put into the preview"
                resize="none"
                className="w-full h-full p-2 rounded resize-none scrollbar-none"
                onChange={(e) => setCurrentAskingQuestion(e.target.value)}
                value={currentAskingQuestion}
              />
            </Card>
          )}
        </>
      ) : (
        <YourQuestions />
      )}
    </>
  );
};

export default AskAQuestion;
