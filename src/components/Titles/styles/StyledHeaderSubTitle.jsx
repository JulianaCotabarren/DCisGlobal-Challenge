import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledHeaderSubTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 800;
  color: var(--color-grey-100);
  margin-bottom: 3rem;

  ${respondTo.sm`
    font-size: 2.4rem;
  `}
  ${respondTo.md`
    font-size: 2.6rem;
  `}
  ${respondTo.lg`
    font-size: 2.8rem;
  `}
`;
