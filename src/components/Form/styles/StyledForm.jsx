import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const StyledForm = styled.form`
  width: 75%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${respondTo.sm`
    width: 60%;
  `}
  ${respondTo.md`
    width: 50%;
  `}
  ${respondTo.lg`
    width: 45%;
  `}
`;
