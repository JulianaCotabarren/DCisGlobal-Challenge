import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo-img" src={logo}></img>
      </div>
      <div className="navbar-items">
        <ul>
          <li>#WeAreDCisGlobal</li>
          <li>#DCisStandard</li>
          <li>#DCisTeams</li>
          <li>#DCisScouting</li>
          <li>#DCisPartners</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
