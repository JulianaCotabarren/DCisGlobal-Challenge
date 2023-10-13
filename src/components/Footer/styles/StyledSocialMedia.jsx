import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledSocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 90vw;
  margin: 2rem auto o auto;

  ${respondTo.md`
  flex-direction: row;
  `}
`;
