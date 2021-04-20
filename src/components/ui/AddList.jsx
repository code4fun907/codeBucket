import clsx from "clsx";

const AddList = ({ name, items = [], onAdd, onDelete, className = "" }) => {
  return (
    <div className={clsx(className)}>
      <div className="flex items-center">
        <p>{name}</p>
        <button
          onClick={onAdd}
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
            Add a new {name.slice(0, name.length - 1).toLowerCase()}
          </p>
        )}
      </div>
      {items.length > 0 && (
        <p className="mt-2 text-xs text-gray-500">
          tip: click a item again to remove it
        </p>
      )}
    </div>
  );
};

export default AddList;
