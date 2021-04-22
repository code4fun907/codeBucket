import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import Input from "../ui/Input";

const AskAQuestion = () => {
  return (
    <>
      <h1 className="text-xl">Ask a question</h1>
      <TextInfo className="mb-4">
        make sure to ask a descriptive question
      </TextInfo>
      <Input type="text" text="Title" />
      <TextInfo>make sure to use a descriptive title</TextInfo>

      <h1 className="mt-4 text-gray-600">Question</h1>
      <TextInfo className="mb-4">any valid markdown is valid here!</TextInfo>
      <Card className="h-2/4">
        <textarea
          placeholder="type some markdown and it will be put into the preview"
          resize="none"
          className="w-full h-full p-2 rounded resize-none"
        />
      </Card>
      <h1 className="mt-4 text-gray-600">Preveiw</h1>
      <Card>
        <textarea readOnly className="w-full h-full p-2 rounded resize-none" />
      </Card>
    </>
  );
};

export default AskAQuestion;
