import { FieldTimeOutlined } from "@ant-design/icons";
import DeskList from "./DeskList";

const RecentDesks = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap text-white">
        <FieldTimeOutlined />
        Недавно просмотренные
      </div>

      <DeskList type="recent" />
    </div>
  );
};

export default RecentDesks;
