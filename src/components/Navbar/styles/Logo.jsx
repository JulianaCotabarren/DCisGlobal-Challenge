import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const Logo = styled.div`
  display: none;

  ${respondTo.sm`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    margin-left: 1rem;
    width: 25rem;
    height: 5rem;
  `}
`;
