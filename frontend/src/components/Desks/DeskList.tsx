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
    </div>
  );
};

export default DeskList;
