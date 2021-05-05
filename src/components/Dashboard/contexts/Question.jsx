import db from "../../../lib/db";
import { useAuth } from "../../../contexts/Auth";
import { useState, createContext, useContext } from "react";

/**
  This context will be used only to provide the dashboard component
  access to the current question the user is asking and the current
  question the user is editing
**/
const QuestionContext = createContext();

export const useQuestion = () => useContext(QuestionContext);

export const QuestionContextProvider = ({ children }) => {
  const { user } = useAuth();

  const [currentAskingQuestionTitle, setCurrentAskingQuestionTitle] = useState(
    ""
  );

  const [currentAskingQuestionBody, setCurrentAskingQuestionBody] = useState(
    ""
  );

  const [currentAskingQuestionTags, setCurrentAskingQuestionTags] = useState(
    []
  );

  const askNewQuestion = () => {
    // TODO: Add validation for this shit
    db.createQuestion(
      currentAskingQuestionTitle,
      currentAskingQuestionBody,
      currentAskingQuestionTags,
      user.uid
    );
  };

  const values = {
    currentAskingQuestionTitle,
    setCurrentAskingQuestionTitle,
    currentAskingQuestionBody,
    setCurrentAskingQuestionBody,
    currentAskingQuestionTags,
    setCurrentAskingQuestionTags,
    askNewQuestion,
  };

  return (
    <QuestionContext.Provider value={values}>
      {children}
    </QuestionContext.Provider>
  );
};
