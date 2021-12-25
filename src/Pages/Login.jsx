import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export default function Login() {
  const [auth, toggleAuth] = useContext(AuthContext);
  if (!auth) {
    return (
      <div>
        Please Login
        <br />
        <button onClick={toggleAuth}>Login</button>
      </div>
    );
  } else {
    return <Redirect to="/dashboard" />;
  }
}
