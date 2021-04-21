const Form = ({ children }) => {
  return <form className="flex flex-col gap-6">{children}</form>;
};

const SubmitButton = ({ children }) => {
  return (
    <button className="w-full p-4 text-white bg-blue-400 rounded shadow-md hover:bg-blue-300 transition-all">
      {children}
    </button>
  );
};

Form.SubmitButton = SubmitButton;

export default Form;
