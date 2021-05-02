import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import Layout from "./ui/Layout";
import SignupForm from "./Auth/SignupForm";
import SigninForm from "./Auth/SigninForm";
import ProtectedRoute from "./Auth/ProtectedRoute";
import { useAuth } from "../contexts/Auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const { user } = useAuth();
  console.log(user);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth/signup">
            <SignupForm />
          </Route>
          <Route exact path="/auth/signin">
            <SigninForm />
          </Route>
          <ProtectedRoute
            exact
            path="/dashboard"
            component={DashBoard}
            auth={user !== null}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
