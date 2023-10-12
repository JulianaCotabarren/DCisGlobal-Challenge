import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledHeaderMainTitle = styled.h1`
  font-size: 3.2rem;
  color: #a97ed9;

  ${respondTo.sm`
  color: white;
  `}
`;
