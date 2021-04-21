import Card from "../ui/Card";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <Card className="w-full p-3 bg-white sm:w-2/3 md:w-1/2 lg:w-2/3 xl:w-1/2">
        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;
