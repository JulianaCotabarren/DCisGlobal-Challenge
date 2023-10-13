import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import {
  Logo,
  LogoImg,
  NavbarContainer,
  NavbarLink,
  NavbarList,
  HamburguerButton,
} from "./styles";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <HamburguerButton className={menuOpen ? "open" : ""} onClick={toggleMenu}>
        <FaBars />
      </HamburguerButton>
      <Logo>
        <LogoImg className="logo-img" src={logo}></LogoImg>
      </Logo>
      <NavbarList className={menuOpen ? "open" : ""}>
        <NavbarLink to="/">#WeAreDCisGlobal</NavbarLink>
        <NavbarLink to="/standard">#DCisStandard</NavbarLink>
        <NavbarLink to="/teams">#DCisTeams</NavbarLink>
        <NavbarLink to="/scouting">#DCisScouting</NavbarLink>
        <NavbarLink to="/partners">#DCisPartners</NavbarLink>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
