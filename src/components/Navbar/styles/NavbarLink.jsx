import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  padding: 0 0.5rem;
  list-style: none;
  height: 1.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  transition: 0.3s;

  &:hover {
    border-bottom: 2px #a97ed9 solid;
    border-top: 2px #a97ed9 solid;
    cursor: pointer;
  }
`;
