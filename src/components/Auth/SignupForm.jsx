import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import AuthLayout from "./AuthLayout";
import Form from "../ui/Form";
import Input from "../ui/Input";

const SignupForm = () => {
  return (
    <AuthLayout>
      <h1 className="my-8 text-2xl text-center">Signup</h1>
      <Form>
        <div className="flex flex-col">
          <Input type="email" text="Email" />
        </div>
        <div className="flex flex-col">
          <Input type="password" text="Password" />
          <Input.Info>
            password must be at least 5 long and contain a number
          </Input.Info>
        </div>
        <div className="flex flex-col">
          <Input type="password" text="Confirm Password" />
        </div>
        <Form.SubmitButton>signup</Form.SubmitButton>
        <p className="text-sm text-center text-gray-400">or signup with</p>
        <OAuthButton icon={<GoogleIcon />} text="signup with google" />
        <OAuthButton icon={<GithubIcon />} text="signup with github" />
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
