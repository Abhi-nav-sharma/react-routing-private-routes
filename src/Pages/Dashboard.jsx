import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Dashboard() {
  const [toggleAuth] = useContext(AuthContext);
  const history = useHistory();
  const openSettings = () => {
    history.push("/dashboard/settings");
  };
  return (
    <div>
      Welcome to Dashboard
      <br />
      <button onClick={openSettings}>Go to settings</button>
      <button onClick={toggleAuth}>LogOut</button>
    </div>
  );
}
