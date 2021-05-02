import QuestionsList from "../components/Home/QuestionsList";
import SortFilterOptions from "../components/Home/SortFilterOptions";
import { useSearch } from "../contexts/Search";
import { useAuth } from "../contexts/Auth";

const Home = () => {
  const { filteredQuestions } = useSearch();

  return (
    <div className="flex">
      <QuestionsList questions={filteredQuestions} />
      <SortFilterOptions />
    </div>
  );
};

export default Home;
