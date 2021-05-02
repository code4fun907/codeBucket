import { useAuth } from "../../contexts/Auth";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        auth === true ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
