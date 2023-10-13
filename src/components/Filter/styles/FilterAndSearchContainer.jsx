import styled from "styled-components";
import { respondTo } from "../../../styles/mixins/responsive";

export const FilterAndSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-top: 2rem;

  ${respondTo.sm`
    display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
  margin-top: 2rem;

  `}
  ${respondTo.md`
  margin-left: 15rem;
  `}
  ${respondTo.lg`
  margin-left: 28rem;
  `}
`;
