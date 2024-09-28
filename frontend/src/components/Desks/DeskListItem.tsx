import { FC } from "react";

interface IDeskListItem {
  onClick: () => void;
}

const DeskListItem: FC<IDeskListItem> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative text-white cursor-pointer w-44 h-24 bg-indigo-600  p-1 rounded-md"
    >
      <span className="absolute right-2">Доска</span>
      <img src="" alt="" />
    </div>
  );
};

export default DeskListItem;
