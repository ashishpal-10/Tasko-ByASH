import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">TASKO.</div>

      <div className="nav-right">
        {userName && <span className="user-name">Hi, {userName}</span>}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Navbar
