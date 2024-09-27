import UserCard from "../components/UserProfile/UserCard";
import SettingsCard from "../components/UserProfile/SettingsCard";

const ProfilePage = () => {
    return (
        <div className="flex flex-row justify-center p-10">
            <UserCard />
            <SettingsCard />
        </div>
    );
};

export default ProfilePage;
