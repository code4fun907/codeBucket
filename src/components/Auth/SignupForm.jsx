import GithubIcon from "../../icons/GithubIcon";
import GoogleIcon from "../../icons/GoogleIcon";
import OAuthButton from "./OAuthButton";
import AuthLayout from "./AuthLayout";
import Form from "../ui/Form";
import Input from "../ui/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required!"),
  password: yup
    .string()
    .min(8, "password must be at least 8 long!")
    .required("password is required!"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <AuthLayout>
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
        <OAuthButton icon={<GoogleIcon />} text="signup with google" />
        <OAuthButton icon={<GithubIcon />} text="signup with github" />
      </Form>
    </AuthLayout>
  );
};

export default SignupForm;
