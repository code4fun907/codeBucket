import Card from "../ui/Card";
import Button from "../ui/Button";
import TextInfo from "../ui/TextInfo";
import HorizontalAddList from "../ui/HorizontalAddList";
import Input from "../ui/Input";
import ReactMarkdown from "react-markdown";
import YourQuestions from "./YourQuestions";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState, useEffect } from "react";
import { useToasts } from "react-toast-notifications";
import { useQuestion } from "./contexts/Question";

const AskAQuestion = () => {
  const {
    currentAskingQuestionTitle,
    setCurrentAskingQuestionTitle,
    currentAskingQuestionBody,
    setCurrentAskingQuestionBody,
    currentAskingQuestionTags,
    setCurrentAskingQuestionTags,
    askNewQuestion,
  } = useQuestion();
  const { addToast } = useToasts();
  const [previewShowing, setPreviewShowing] = useState(false);
  const [yourQuestionsShowing, setYourQuestionsShowing] = useState(false);

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
    <div className="mb-2 md:hidden">
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

  const handleAddNewQuestionTag = (tag) => {
    if (tag === "")
      return addToast("Cant add a empty tag", {
        appearance: "error",
        autoDismiss: true,
      });

    if (currentAskingQuestionTags.length === 5)
      return addToast("Cant add more then 5 tags!", {
        appearance: "error",
        autoDismiss: true,
      });

    if (currentAskingQuestionTags.includes(tag))
      return addToast(`You already have a ${tag} tag`, {
        appearance: "error",
        autoDismiss: true,
      });

    setCurrentAskingQuestionTags((prev) => [...prev, tag]);
  };

  const handleDeleteNewQuestionTag = (index) => {
    setCurrentAskingQuestionTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleAskQuestion = () => {
    askNewQuestion();
  };

  const renderPreviewOrEditor = () =>
    previewShowing ? (
      <Card className="w-full h-full p-2 overflow-scroll bg-white rounded">
        <ReactMarkdown className="markdown">
          {currentAskingQuestionBody}
        </ReactMarkdown>
      </Card>
    ) : (
      <Card className="h-full">
        <textarea
          placeholder="type some markdown and it will be put into the preview"
          resize="none"
          className="w-full h-full p-2 rounded resize-none"
          onChange={(e) => setCurrentAskingQuestionBody(e.target.value)}
          value={currentAskingQuestionBody}
        />
      </Card>
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
          <Input
            type="text"
            text="Title"
            value={currentAskingQuestionTitle}
            onChange={(e) => setCurrentAskingQuestionTitle(e.target.value)}
          />
          <TextInfo>make sure to use a descriptive title</TextInfo>
          <h1 className="mt-4 text-gray-600">Question</h1>
          <TextInfo className="mb-1">
            any valid markdown is valid here!
          </TextInfo>
          <Button
            className="mb-2 text-xs w-28 hover:bg-blue-500 "
            onClick={togglePreview}
          >
            toggle preview
          </Button>
          {renderPreviewOrEditor()}
          <HorizontalAddList
            name="Tags"
            items={currentAskingQuestionTags}
            onAdd={handleAddNewQuestionTag}
            onDelete={handleDeleteNewQuestionTag}
          />
          <Button
            className="w-40 my-2 text-md hover:bg-blue-500"
            onClick={handleAskQuestion}
          >
            Ask the question
          </Button>
        </>
      ) : (
        <YourQuestions />
      )}
    </>
  );
};

export default AskAQuestion;
