const TextInfo = ({ children, className, ...props }) => {
  return (
    <p className={`mt-1 text-xs text-gray-400 ${className}`} {...props}>
      {children}
    </p>
  );
};

export default TextInfo;
