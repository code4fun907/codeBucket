import Card from "../ui/Card";
import Toggle from "../ui/Toggle";
import TextInfo from "../ui/TextInfo";
import Input from "../ui/Input";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { useQuestion } from "./contexts/Question";

const AskAQuestion = () => {
  const { currentAskingQuestion, setCurrentAskingQuestion } = useQuestion();
  const [previewShowing, setPreviewShowing] = useState(false);

  return (
    <>
      <h1 className="text-xl">Ask a question</h1>
      <TextInfo className="mb-4">
        make sure to ask a descriptive question
      </TextInfo>
      <Input type="text" text="Title" />
      <TextInfo>make sure to use a descriptive title</TextInfo>

      <h1 className="mt-4 text-gray-600">Question</h1>
      <Toggle checked={previewShowing} onChange={setPreviewShowing} />
      <TextInfo className="mb-4">any valid markdown is valid here!</TextInfo>
      <Card className="h-full">
        <textarea
          placeholder="type some markdown and it will be put into the preview"
          resize="none"
          className="w-full h-full p-2 rounded resize-none"
          onChange={(e) => setCurrentAskingQuestion(e.target.value)}
        />
      </Card>
    </>
  );
};

export default AskAQuestion;
