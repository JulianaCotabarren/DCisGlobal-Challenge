import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const NavbarList = styled.ul`
  display: none;
  &.open {
    display: flex;
    flex-direction: column;
    background-color: var(--color-light-blue);
    width: 100vw;
    height: 10rem;
    margin-top: 0;
    padding-top: 1rem;
    position: relative;
  }

  ${respondTo.sm`
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
  width: 46rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  `}
  ${respondTo.md`
    margin-left: 4rem;
  `}
  ${respondTo.lg`
    margin-left: 10rem;
  `}
`;
