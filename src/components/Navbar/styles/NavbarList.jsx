import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-light-blue);
  background: var(--color-light-blue);
  border-radius: 0.8rem;
  height: 2.8rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
  padding: 0;
  width: 38rem;

  ${respondTo.sm`
    margin-left: 0;
  `}
  ${respondTo.md`
    margin-left: 14rem;
  `}
  ${respondTo.lg`
    margin-left: 18rem;
  `}
`;
