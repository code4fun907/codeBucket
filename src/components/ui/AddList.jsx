import clsx from "clsx";
import { useState } from "react";
import MiddleModal from "./MiddleModal";
import Card from "./Card";

const AddList = ({ name, items = [], onAdd, onDelete, className = "" }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState("");

  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
    setNewItem("");
  };

  const handleAddNewItem = () => {
    onAdd(newItem);
    handleAddModalClose();
  };

  const formatName = (name) => name.slice(0, name.length - 1).toLowerCase();

  return (
    <div className={clsx(className)}>
      <div className="flex items-center">
        <p>{name}</p>
        <button
          onClick={handleAddModalOpen}
          className="flex items-center justify-center w-4 h-4 p-3 ml-2 text-lg font-bold text-white bg-blue-500 rounded hover:bg-blue-400"
        >
          +
        </button>
      </div>
      <div className="mt-1">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div
              key={index}
              className="pl-2 text-gray-500 border-l-4 border-blue-500 cursor-pointer hover:border-red-500 transition-all hover:border-l-8"
              onClick={() => onDelete(index)}
            >
              {item}
            </div>
          ))
        ) : (
          <p className="pl-2 text-sm text-gray-500">
            Add a new {formatName(name)}
          </p>
        )}
      </div>
      {items.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          tip: click a item again to remove it
        </p>
      )}
      <MiddleModal isOpen={addModalOpen} onClose={handleAddModalClose}>
        <Card className="flex flex-col p-4 bg-white">
          <p className="mb-4 text-lg text-gray-500">
            Add a new {formatName(name)}
          </p>
          <input
            type="text"
            placeholder={`new ${formatName(name)}`}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="p-2 mb-2 border rounded boder-gray-200"
          />
          <button
            onClick={handleAddNewItem}
            className="w-full p-2 text-lg text-white bg-blue-400 rounded hover:bg-blue-300 transition-all"
          >
            add {formatName(name)}
          </button>
        </Card>
      </MiddleModal>
    </div>
  );
};

export default AddList;
