import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
