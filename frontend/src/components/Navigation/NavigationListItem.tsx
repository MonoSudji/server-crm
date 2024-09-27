import { DownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps, Space } from "antd";

const NavigationItem = ({
  items,
  label,
}: {
  items: MenuProps["items"];
  label: string;
}) => {
  return (
    <li>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {label}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </li>
  );
};

export default NavigationItem;
