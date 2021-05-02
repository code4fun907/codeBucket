import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import Input from "../ui/Input";
import ReactMarkdown from "react-markdown";
import YourQuestions from "./YourQuestions";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState, useEffect } from "react";
import { useQuestion } from "./contexts/Question";

const AskAQuestion = () => {
  const { currentAskingQuestion, setCurrentAskingQuestion } = useQuestion();
  const [previewShowing, setPreviewShowing] = useState(false);
  const [yourQuestionsShowing, setYourQuestionsShowing] = useState(false);
  //
  // TODO: this is so extremely hacky :facepalm
  // basically I need to make sure if the user is on the 'your questions' tab
  // on a small screen then expand to a large screen it switches back to showing
  // the ask a question panel so that there is not 2 your questions sections
  // right next to eachother
  const shouldOnlyShowAskAQuestion = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setYourQuestionsShowing(false);
  }, [shouldOnlyShowAskAQuestion]);

  const togglePreview = () =>
    setPreviewShowing((previewShowing) => !previewShowing);

  const generateAskAQuestionButtonClasses = () =>
    `p-2 text-white rounded mr-2 ${
      yourQuestionsShowing ? "bg-blue-200" : "bg-blue-400"
    }`;

  const generateYourQuestionsButtonClasses = () =>
    `p-2 text-white rounded mr-2 ${
      yourQuestionsShowing ? "bg-blue-400" : "bg-blue-200"
    }`;

  const renderTabButtons = () => (
    <div className="md:hidden mb-2">
      <button
        className={generateAskAQuestionButtonClasses()}
        onClick={() => setYourQuestionsShowing(false)}
      >
        ask a question
      </button>
      <button
        className={generateYourQuestionsButtonClasses()}
        onClick={() => setYourQuestionsShowing(true)}
      >
        your questions
      </button>
    </div>
  );

  return (
    <>
      {renderTabButtons()}
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
            <Card className="w-full h-full p-2 overflow-scroll bg-white rounded">
              <ReactMarkdown className="markdown">
                {currentAskingQuestion}
              </ReactMarkdown>
            </Card>
          ) : (
            <Card className="h-full">
              <textarea
                placeholder="type some markdown and it will be put into the preview"
                resize="none"
                className="w-full h-full p-2 rounded resize-none"
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
