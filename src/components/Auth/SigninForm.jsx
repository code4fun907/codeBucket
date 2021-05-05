import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import AuthLayout from "./AuthLayout";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useAuth } from "../../contexts/Auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const history = useHistory();

  const {
    signinWithEmailAndPassword,
    signinWithGithub,
    signinWithGoogle,
  } = useAuth();

  const handleSignInWithEmailAndPassword = async (data) => {
    setIsSubmitting(true);
    try {
      await signinWithEmailAndPassword(data.email, data.password);
      history.push("/");
    } catch (err) {
      return alert(err);
    }
  };

  const handleSignInWithGithub = async () => {
    setIsSubmitting(true);
    try {
      await signinWithGithub();
      history.push("/");
    } catch (err) {
      return alert(err);
    }
  };

  const handleSignInWithGoogle = async () => {
    setIsSubmitting(true);
    try {
      await signinWithGoogle();
      history.push("/");
    } catch (err) {
      return alert(err);
    }
  };

  const onSubmit = async (data, kind) => {
    switch (kind) {
      case "provider/username-password":
        handleSignInWithEmailAndPassword(data);
        break;

      case "provider/google":
        handleSignInWithGoogle();
        break;

      case "provider/github":
        handleSignInWithGithub();
        break;
    }
    setIsSubmitting(false);
  };

  return (
    <AuthLayout>
      <h1 className="my-8 text-2xl text-center">Signin</h1>
      <Form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, "provider/username-password")
        )}
      >
        <Form.Errors errors={errors} />
        <div className="flex flex-col">
          <Input type="text" text="Email" {...register("email")} />
        </div>
        <div className="flex flex-col">
          <Input type="password" text="Password" {...register("password")} />
        </div>
        <Form.SubmitButton disabled={isSubmitting}>signin</Form.SubmitButton>
        <p className="text-sm text-center text-gray-400">or signin with</p>
        <OAuthButton
          icon={<GoogleIcon />}
          text="signin with google"
          onClick={() => onSubmit({}, "provider/google")}
        />
        <OAuthButton
          icon={<GithubIcon />}
          text="signin with github"
          onClick={() => onSubmit({}, "provider/github")}
        />
      </Form>
    </AuthLayout>
  );
};

export default SigninForm;
