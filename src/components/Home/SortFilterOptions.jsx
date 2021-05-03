import Card from "../ui/Card";
import VerticalAddList from "../ui/VerticalAddList";
import { useSearch } from "../../contexts/Search";
import { useToasts } from "react-toast-notifications";
import { RadioGroup } from "@headlessui/react";

const RadioItem = ({ value, text, ...props }) => (
  <RadioGroup.Option value={value}>
    {({ checked }) => (
      <div className="flex items-center mb-4">
        <div
          className={`w-8 h-8 cursor-pointer rounded border border-gray-200 ${
            checked ? "bg-green-300 border-green-100" : "bg-white"
          }`}
        />
        <p className="ml-4 text-gray-500">{text}</p>
      </div>
    )}
  </RadioGroup.Option>
);

const SortFilterOptions = () => {
  const { filterTags, setFilterTags, filterBy, setFilterBy } = useSearch();
  const { addToast } = useToasts();

  const handleAddFilterTag = (tag) => {
    if (tag === "")
      return addToast("Cant add a empty tag", {
        appearance: "error",
        autoDismiss: true,
      });

    if (filterTags.length === 5)
      return addToast("Cant add more then 5 tags!", {
        appearance: "error",
        autoDismiss: true,
      });

    if (filterTags.includes(tag))
      return addToast(`You already have a ${tag} tag`, {
        appearance: "error",
        autoDismiss: true,
      });

    setFilterTags((prev) => [...prev, tag]);
  };

  const handleDeleteFilterTag = (index) => {
    setFilterTags((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Card className="hidden w-1/3 h-full p-4 ml-8 bg-white md:block">
      <h1 className="text-xl text-blue-600">Sort question by</h1>
      <RadioGroup value={filterBy} onChange={setFilterBy} className="mt-4">
        <RadioItem value="recent" text="most recent" />
        <RadioItem value="likes" text="most popular (likes)" />
        <RadioItem value="comments" text="most popular (comments)" />
        <RadioItem value="none" text="none" />
      </RadioGroup>
      <h1 className="text-xl text-blue-600">Filter questions by</h1>
      <VerticalAddList
        name="Tags"
        className="mt-4"
        items={filterTags}
        onAdd={handleAddFilterTag}
        onDelete={handleDeleteFilterTag}
      />
    </Card>
  );
};

export default SortFilterOptions;
