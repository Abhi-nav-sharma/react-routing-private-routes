import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export default function PrivateRoute({ exact, path, children }) {
  const [auth] = useContext(AuthContext);
  if (auth) {
    return (
      <Route exact={exact} path={path}>
        {children}
      </Route>
    );
  } else {
    return <Redirect to="/login" />;
  }
}
