import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
