const Form = ({ children, ...props }) => {
  return (
    <form className="flex flex-col gap-6" {...props}>
      {children}
    </form>
  );
};

const SubmitButton = ({ children, disabled = false, ...props }) => {
  return (
    <button
      className="w-full p-4 text-white bg-blue-400 rounded shadow-md hover:bg-blue-300 transition-all"
      type="submit"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Expects an errors object from react-hook-form
const Errors = ({ errors }) => {
  if (Object.keys(errors).length === 0) return null;

  return (
    <div>
      {Object.entries(errors).map(([key, _]) => (
        <div className="bg-red-400 rounded p-2 text-white mb-2">
          {errors[key].message}
        </div>
      ))}
    </div>
  );
};

Form.SubmitButton = SubmitButton;
Form.Errors = Errors;

export default Form;
