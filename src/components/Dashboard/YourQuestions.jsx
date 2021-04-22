import Card from "../ui/Card";
import TextInfo from "../ui/TextInfo";

const YourQuestions = () => {
  return (
    <>
      <h1 className="text-xl">Your questions</h1>
      <TextInfo className="mb-4">veiw or edit your previous questions</TextInfo>
      <Card className="h-screen p-2 bg-white">
        <p className="text-gray-400">...you have no previous questions</p>
      </Card>
    </>
  );
};

export default YourQuestions;
