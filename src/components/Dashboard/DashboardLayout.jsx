import useHeight from "../../hooks/useHeight";
import { QuestionContextProvider } from "./contexts/Question";

const DashboardLayout = ({ children }) => {
  const dashboardHeight = useHeight();

  // Question context get provided to the dashboard and the dashboard only
  return (
    <div className="flex gap-8" style={{ height: dashboardHeight }}>
      <QuestionContextProvider>{children}</QuestionContextProvider>
    </div>
  );
};

const LeftSection = ({ children }) => (
  <div className="flex flex-col w-1/3">{children}</div>
);

const RightSection = ({ children }) => (
  <div className="flex flex-col w-2/3 overflow-scroll scrollbar-none">
    {children}
  </div>
);

DashboardLayout.LeftSection = LeftSection;
DashboardLayout.RightSection = RightSection;

export default DashboardLayout;
