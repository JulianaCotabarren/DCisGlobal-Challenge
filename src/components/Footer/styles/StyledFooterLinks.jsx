import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledFooterLinks = styled.div`
  display: flex;
  flex-direction: column;

  ${respondTo.sm`
  flex-direction: row;
  `}
`;
