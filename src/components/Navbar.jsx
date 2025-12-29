import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>EduNext</h2>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
         <Link to="/courses">Courses</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </nav>
  );
}
