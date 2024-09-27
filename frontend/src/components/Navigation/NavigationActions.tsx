import { BellOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useState } from "react";

const NavigationActions = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex gap-2 items-center">
      <Input
        placeholder="Поиск..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className="text-white hover:bg-slate-700 px-2 py-1 rounded-full duration-200">
        <BellOutlined />
      </button>
      <div>
        <img src="" alt="img" />
      </div>
    </div>
  );
};

export default NavigationActions;
