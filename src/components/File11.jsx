import UserProfile from '../components/UserProfile';

const ProfilePage = ({ user }) => {
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      <UserProfile user={user} />
    </div>
  );
};

export default ProfilePage;