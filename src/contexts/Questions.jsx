import firebase from "../lib/firebase";
import { createContext, useContext, useEffect, useState } from "react";

export const QuestionsContext = createContext();

export const useQuestions = () => useContext(QuestionsContext);

export const QuestionsContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const database = firebase.firestore();

    return database.collection("questions").onSnapshot((snapshot) => {
      const questionsFromDb = [];

      snapshot.forEach((doc) =>
        questionsFromDb.push({ ...doc.data(), id: doc.id })
      );

      setQuestions(questionsFromDb);
    });
  }, []);

  const values = {
    questions,
    setQuestions,
  };

  return (
    <QuestionsContext.Provider value={values}>
      {children}
    </QuestionsContext.Provider>
  );
};
