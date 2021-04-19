import NavBar from "../NavBar";

const Layout = ({ children }) => (
  <div className="bg-gray-100">
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="mt-4 max-w-7xl self-center w-full px-4">{children}</div>
    </div>
  </div>
);

export default Layout;
