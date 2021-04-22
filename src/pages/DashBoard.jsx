import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import TextInfo from "../components/ui/TextInfo";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const DashBoard = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.LeftSection>
        <h1 className="text-xl">Your questions</h1>
        <TextInfo className="mb-4">
          veiw or edit your previous questions
        </TextInfo>
        <Card className="h-screen p-2 bg-white">
          <p className="text-gray-400">...you have no previous questions</p>
        </Card>
      </DashboardLayout.LeftSection>
      <DashboardLayout.RightSection>
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
          <textarea
            readOnly
            className="w-full h-full p-2 rounded resize-none"
          />
        </Card>
      </DashboardLayout.RightSection>
    </DashboardLayout>
  );
};

export default DashBoard;
