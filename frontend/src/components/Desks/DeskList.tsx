import { PlusCircleOutlined } from "@ant-design/icons";
import DeskListItem from "./DeskListItem";

const DeskList = ({ type }: { type: string }) => {
  return type === "recent" ? (
    <div className="flex gap-3 flex-wrap">
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
    </div>
  ) : (
    <div className="flex gap-3 flex-wrap">
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <DeskListItem />
      <div className="border border-white w-44 h-24 rounded-lg">
        <PlusCircleOutlined className="text-white cursor-pointer text-3xl justify-center w-full items-center h-full" />
      </div>
    </div>
  );
};

export default DeskList;
