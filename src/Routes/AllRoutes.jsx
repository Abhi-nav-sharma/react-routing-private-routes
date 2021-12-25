import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Settings from "../Pages/Settings";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoute exact={true} path="/dashboard">
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact={true} path="/dashboard/settings">
        <Settings />
      </PrivateRoute>
    </Switch>
  );
}
