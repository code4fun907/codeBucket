import YourQuestions from "../components/Dashboard/YourQuestions";
import AskAQuestion from "../components/Dashboard/AskAQuestion";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const DashBoard = () => {
  return (
    <DashboardLayout>
      <DashboardLayout.LeftSection>
        <YourQuestions />
      </DashboardLayout.LeftSection>
      <DashboardLayout.RightSection>
        <AskAQuestion />
      </DashboardLayout.RightSection>
    </DashboardLayout>
  );
};

export default DashBoard;
