import Card from "./ui/Card";
import InfoIcon from "./ui/InfoIcon";
import HeartIcon from "../icons/HeartIcon";
import CommentIcon from "../icons/CommentIcon";
import { useSearch } from "../contexts/Search";

const Question = ({ title, contentPreview, tags, likes, comments }) => {
  const { setFilterTags, filterTags } = useSearch();

  const handleAddFilterTag = (tag) => {
    if (filterTags.includes(tag)) {
      // remove tag is user clicks on it and its already being filterd
      setFilterTags((prev) =>
        filterTags.filter((tag) => !filterTags.includes(tag))
      );
      return;
    } else {
      setFilterTags((prev) => [...prev, tag]);
    }
  };

  return (
    <Card className="p-4 break-words bg-white">
      <h1 className="mb-4 text-lg text-blue-600">{title}</h1>
      <p className="text-gray-500">{contentPreview}</p>
      <div className="flex justify-between mt-4">
        <div className="flex gap-4">
          <InfoIcon
            icon={<HeartIcon />}
            info={likes}
            iconClassName="text-red-400 w-6 h-6"
            infoClassName="text-gray-500"
          />
          <InfoIcon
            icon={<CommentIcon />}
            info={comments}
            iconClassName="text-blue-400 w-6 h-6"
            infoClassName="text-gray-500"
          />
        </div>
        <div className="flex items-start gap-4">
          {tags.map((tag, index) => (
            <Card
              onClick={() => handleAddFilterTag(tag)}
              key={index}
              className="p-1 cursor-pointer"
            >
              {tag}
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Question;
