import { Fragment } from "react";

const Input = ({ type, text, ...props }) => {
  return (
    <Fragment>
      <label className="text-gray-600">{text}</label>
      <input
        className="p-2 border border-gray-200 rounded shadow"
        type={type}
        placeholder={text.toLowerCase()}
        {...props}
      />
    </Fragment>
  );
};

const Info = ({ children }) => {
  return <p className="mt-1 text-xs text-gray-400">{children}</p>;
};

Input.Info = Info;

export default Input;
