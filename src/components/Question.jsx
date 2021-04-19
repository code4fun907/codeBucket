import Card from "./ui/Card";
import InfoIcon from "./ui/InfoIcon";
import HeartIcon from "../icons/HeartIcon";
import CommentIcon from "../icons/CommentIcon";

const Question = ({ title, contentPreview }) => (
  <Card className="p-4 break-words">
    <h1 className="mb-4 text-lg text-blue-600">{title}</h1>
    <p className="text-gray-500">{contentPreview}</p>
    <div className="flex mt-4 gap-4">
      <InfoIcon
        icon={<HeartIcon />}
        info={20}
        iconClassName="text-red-400 w-6 h-6"
        infoClassName="text-gray-500"
      />
      <InfoIcon
        icon={<CommentIcon />}
        info={40}
        iconClassName="text-blue-400 w-6 h-6"
        infoClassName="text-gray-500"
      />
    </div>
  </Card>
);

export default Question;
