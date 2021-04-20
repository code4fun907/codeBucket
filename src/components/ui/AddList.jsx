import clsx from "clsx";
import { useToasts } from "react-toast-notifications";
import { useState } from "react";

const AddList = ({ name, max, className = "" }) => {
  // TODO: come on man is this the best name you got?
  const [things, setThings] = useState(["node", "react", "typescript", "css"]);
  const { addToast } = useToasts();

  const handleAddItem = () => {
    if (things.length >= max) {
      addToast(`Limit of ${max} items added to list`, {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    setThings((things) => [...things, "node"]);
  };

  const handleDeleteItem = (index) => {
    setThings((things) => things.filter((_, i) => i != index));
  };

  return (
    <div className={clsx(className)}>
      <div className="flex items-center">
        <p>{name}</p>
        <button
          onClick={handleAddItem}
          className="flex items-center justify-center w-4 h-4 p-3 ml-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-400"
        >
          +
        </button>
      </div>
      <div className="mt-1">
        {things.length > 0 ? (
          things.map((thing, index) => (
            <div
              key={index}
              className="pl-2 text-gray-500 border-l-4 border-blue-500 cursor-pointer hover:border-red-500 transition-all hover:border-l-8"
              onClick={() => handleDeleteItem(index)}
            >
              {thing}
            </div>
          ))
        ) : (
          <p className="pl-2 text-sm text-gray-500">
            Add a new {name.slice(0, name.length - 1).toLowerCase()}
          </p>
        )}
      </div>
      {things.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          tip: click a item again to remove it
        </p>
      )}
    </div>
  );
};

export default AddList;
