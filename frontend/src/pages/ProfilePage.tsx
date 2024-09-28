import UserCard from "../components/UserProfile/UserCard";
import SettingsCard from "../components/UserProfile/SettingsCard";
import CompaniesCard from "../components/UserProfile/CompaniesCard";

const ProfilePage = () => {
    return (
        <div className="flex flex-row justify-center p-10 gap-6">
            <UserCard />
            <div className="flex flex-col w-[500px] justify-between gap-6">
              <SettingsCard />
              <CompaniesCard />
            </div>
        </div>
    );
};

export default ProfilePage;
