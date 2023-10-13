import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30rem;
  padding: 1rem;
  margin: 0 auto;

  ${respondTo.sm`
  max-width: 50rem;
  `}
  ${respondTo.md`
  max-width: 60rem;
  `}
  ${respondTo.lg`
  max-width: 70rem;
  `}
`;
