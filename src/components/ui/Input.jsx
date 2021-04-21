import { Fragment, forwardRef } from "react";

const Input = forwardRef(({ type, text, ...props }, ref) => {
  return (
    <Fragment>
      <label className="text-gray-600">{text}</label>
      <input
        className="p-2 border border-gray-200 rounded shadow"
        type={type}
        placeholder={text.toLowerCase()}
        {...props}
        ref={ref}
      />
    </Fragment>
  );
});

const Info = ({ children, ...props }) => {
  return (
    <p className="mt-1 text-xs text-gray-400" {...props}>
      {children}
    </p>
  );
};

Input.Info = Info;

export default Input;
