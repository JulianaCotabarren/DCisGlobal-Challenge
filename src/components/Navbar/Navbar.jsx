import logo from "../../assets/logo.png";
import { Logo } from "./styles/Logo";
import { LogoImg } from "./styles/LogoImg";
import { NavbarContainer } from "./styles/NavbarContainer";
import { NavbarLink } from "./styles/NavbarLink";
import { NavbarList } from "./styles/NavbarList";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <LogoImg className="logo-img" src={logo}></LogoImg>
      </Logo>
      <NavbarList>
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
