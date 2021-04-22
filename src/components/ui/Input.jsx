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

export default Input;
