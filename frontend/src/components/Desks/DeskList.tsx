import { PlusCircleOutlined } from "@ant-design/icons";
import DeskListItem from "./DeskListItem";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutesNames } from "../../utils/routes-names";

const DeskList = ({ type }: { type: string }) => {
  const navigate = useNavigate();

  const handleWatchBoard = useCallback(() => {
    navigate(`${RoutesNames.PROJECT}/${1}`);
  }, []);

  return type === "recent" ? (
    <div className="flex gap-3 flex-wrap">
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
    </div>
  ) : (
    <div className="flex gap-3 flex-wrap">
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <DeskListItem onClick={handleWatchBoard} />
      <div className="border border-white w-44 h-24 rounded-lg">
        <PlusCircleOutlined className="text-white cursor-pointer text-3xl justify-center w-full items-center h-full" />
      </div>
    </div>
  );
};

export default DeskList;
