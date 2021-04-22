import Card from "../ui/Card";

const SmallQuestionPreview = ({ title, contentPreview }) => {
  return (
    <Card className="flex flex-col p-2 break-words">
      <h1 className="text-blue-600">{title}</h1>
      <p className="text-gray-400">
        {contentPreview
          ? contentPreview.length > 50
            ? contentPreview.slice(0, 50)
            : contentPreview
          : contentPreview}
      </p>
      <div className="mt-2">
        <button className="bg-blue-500 p-2 text-white rounded text-sm mr-2">
          veiw
        </button>
        <button className="p-2 text-sm border border-blue-500 rounded">
          edit
        </button>
      </div>
    </Card>
  );
};

export default SmallQuestionPreview;
