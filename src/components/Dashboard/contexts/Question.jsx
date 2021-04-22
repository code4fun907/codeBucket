import { useState, createContext, useContext } from "react";

/**
  This context will be used only to provide the dashboard component
  access to the current question the user is asking and the current
  question the user is editing
**/
const QuestionContext = createContext();

export const useQuestion = () => useContext(QuestionContext);

export const QuestionContextProvider = ({ children }) => {
  const [currentAskingQuestion, setCurrentAskingQuestion] = useState("");

  const values = {
    currentAskingQuestion,
    setCurrentAskingQuestion,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};
