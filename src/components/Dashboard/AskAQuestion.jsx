import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import Input from "../ui/Input";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useQuestion } from "./contexts/Question";

const AskAQuestion = () => {
  const { currentAskingQuestion, setCurrentAskingQuestion } = useQuestion();
  const [previewShowing, setPreviewShowing] = useState(false);

  const togglePreview = () =>
    setPreviewShowing((previewShowing) => !previewShowing);

  return (
    <>
      <h1 className="text-xl">Ask a question</h1>
      <TextInfo className="mb-4">
        make sure to ask a descriptive question
      </TextInfo>
      <Input type="text" text="Title" />
      <TextInfo>make sure to use a descriptive title</TextInfo>
      <h1 className="mt-4 text-gray-600">Question</h1>
      <TextInfo className="mb-1">any valid markdown is valid here!</TextInfo>
      <button
        className="bg-blue-400 p-2 rounded text-white text-xs w-28 mb-2"
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
  );
};

export default AskAQuestion;
