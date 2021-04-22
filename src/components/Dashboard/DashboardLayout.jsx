import useHeight from "../../hooks/useHeight";

const DashboardLayout = ({ children }) => {
  const dashboardHeight = useHeight();

  return (
    <div className="flex gap-8" style={{ height: dashboardHeight }}>
      {children}
    </div>
  );
};

const LeftSection = ({ children }) => (
  <div className="flex flex-col w-1/3">{children}</div>
);

const RightSection = ({ children }) => (
  <div className="flex flex-col w-2/3 overflow-scroll">{children}</div>
);

DashboardLayout.LeftSection = LeftSection;
DashboardLayout.RightSection = RightSection;

export default DashboardLayout;
