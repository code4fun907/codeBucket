import SmallQuestionPreview from "./SmallQuestionPreview";
import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";
import uuid from "react-uuid";
import { useQuestions } from "../../contexts/Questions";

const YourQuestions = () => {
  const { questions } = useQuestions();

  return (
    <div className="mt-2">
      <h1 className="text-xl">Your questions</h1>
      <TextInfo className="mb-4">veiw or edit your previous questions</TextInfo>
      <Card className="h-screen p-2 bg-white overflow-scroll scrollbar-none">
        {questions.map((question) => (
          <div key={uuid()} className="mb-4">
            <SmallQuestionPreview
              title={question.title}
              contentPreview={question.contentPreview}
            />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default YourQuestions;
