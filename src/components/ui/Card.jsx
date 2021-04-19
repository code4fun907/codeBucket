import clsx from "clsx";

const Card = ({ children, className }) => {
  return (
    <div
      className={clsx("border border-gray-200 shadow rounded-md", className)}
    >
      {children}
    </div>
  );
};

export default Card;
