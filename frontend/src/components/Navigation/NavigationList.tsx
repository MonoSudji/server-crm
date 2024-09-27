import {
  favouriteItems,
  recentItems,
  workspaceItems,
} from "../../utils/ui-data/dropdown-data";
import NavigationItem from "./NavigationListItem";

const NavigationList = () => {
  return (
    <ul className="flex space-x-4">
      <NavigationItem items={workspaceItems} label="Рабочие пространства" />
      <NavigationItem items={recentItems} label="Недавние" />
      <NavigationItem items={favouriteItems} label="Избранные" />
    </ul>
  );
};

export default NavigationList;
