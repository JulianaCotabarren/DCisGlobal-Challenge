import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo}></img>
      </div>
      <div className="navbar-items">
        <ul>
          <NavLink to="/">#WeAreDCisGlobal</NavLink>
          <NavLink to="/standard">#DCisStandard</NavLink>
          <NavLink to="/teams">#DCisTeams</NavLink>
          <NavLink to="/scouting">#DCisScouting</NavLink>
          <NavLink to="/partners">#DCisPartners</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
