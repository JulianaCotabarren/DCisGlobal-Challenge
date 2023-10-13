import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const HamburguerButton = styled.button`
  display: block;
  font-size: 1.5rem;
  margin-top: 0;
  margin-left: 0;
  padding-top: 0;
  background-color: transparent;
  border: transparent;
  height: 10rem;

  ${respondTo.sm`
    display: none;
  `}

  &.open {
    background-color: var(--color-light-blue);
  }
`;
