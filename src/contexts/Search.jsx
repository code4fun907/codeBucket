import Fuse from "fuse.js";
import { createContext, useContext, useState, useEffect } from "react";
import { useQuestions } from "./Questions";

export const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

const filterQuestions = (questions, tags, by) => {
  if (!by && tags.length === 0) return questions;

  let newQuestions = [];
  let copyOfQuestions = [...questions];

  switch (by) {
    case "likes":
      copyOfQuestions.sort((a, b) => b.likes - a.likes);
      break;

    case "comments":
      copyOfQuestions.sort((a, b) => b.comments - a.comments);
      break;
  }

  if (tags.length === 0) return copyOfQuestions;

  for (const question of copyOfQuestions) {
    question.tags.forEach((tag) => {
      if (tags.includes(tag)) newQuestions.push(question);
    });
  }

  return newQuestions;
};

export const SearchContextProvider = ({ children }) => {
  const { questions } = useQuestions();
  const [filteredQuestions, setFilterdQuestions] = useState([]);
  const [questionsQuery, setQuestionsQuery] = useState("");
  const [filterTags, setFilterTags] = useState([]);
  const [filterBy, setFilterBy] = useState("none");

  useEffect(() => {
    const options = {
      keys: ["title"],
    };

    const fuse = new Fuse(questions, options);
    const newQuestions = fuse.search(questionsQuery);

    if (newQuestions.length > 0) {
      setFilterdQuestions(newQuestions);
    } else {
      setFilterdQuestions(questions);
    }
    setFilterdQuestions((prevQuestions) =>
      filterQuestions(prevQuestions, filterTags, filterBy)
    );
  }, [questionsQuery, questions, filterTags, filterBy]);

  const values = {
    filteredQuestions,
    questionsQuery,
    setQuestionsQuery,
    filterTags,
    setFilterTags,
    filterBy,
    setFilterBy,
  };

  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
};
