import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import AuthLayout from "./AuthLayout";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { useAuth } from "../../contexts/Auth";
import { signupSchema } from "../../utils/validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    signout,
    user,
    signinWithGithub,
    signinWithGoogle,
  } = useAuth();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await signupWithEmailAndPassword(data.email, data.password);
    setIsSubmitting(false);
  };

  const onSignInWithGithub = async () => {
    setIsSubmitting(true);
    await signinWithGithub();
    setIsSubmitting(false);
  };

  const onSignInWithGoogle = async () => {
    setIsSubmitting(true);
    await signinWithGoogle();
    setIsSubmitting(false);
  };

  return (
    <AuthLayout>
      <p>{JSON.stringify(user)}</p>
      <button onClick={() => signout()}>sign out</button>
      <h1 className="my-8 text-2xl text-center">Signup</h1>
      <Form.Errors errors={errors} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <Input type="text" text="Email" {...register("email")} />
        </div>
        <div className="flex flex-col">
          <Input type="password" text="Password" {...register("password")} />
          <Input.Info>password must be at least 8 long</Input.Info>
        </div>
        <div className="flex flex-col">
          <Input
            type="password"
            text="Confirm Password"
            {...register("passwordConfirm")}
          />
        </div>
        <Form.SubmitButton disabled={isSubmitting}>signup</Form.SubmitButton>
        <p className="text-sm text-center text-gray-400">or signup with</p>
        <OAuthButton
          icon={<GoogleIcon />}
          text="signup with google"
          onClick={onSignInWithGoogle}
        />
        <OAuthButton
          icon={<GithubIcon />}
          text="signup with github"
          onClick={onSignInWithGithub}
        />
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
