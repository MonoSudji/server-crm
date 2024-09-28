import { FC } from "react";
import { IBoard } from "../../models/board-model";

interface IDeskListItem {
  name: IBoard["name"];
  onClick: () => void;
}

const DeskListItem: FC<IDeskListItem> = ({ onClick, name }) => {
  return (
    <div
      onClick={onClick}
      className="relative text-white cursor-pointer w-44 h-24 bg-indigo-600  p-1 rounded-md"
    >
      <span className="text-xs">{name}</span>
      <img src="" alt="" />
    </div>
  );
};

export default DeskListItem;
