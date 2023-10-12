import styled from "styled-components";

export const StyledSearchButton = styled.button`
  color: white;
  background-color: var(--color-violet);
  border: 1px solid var(--color-violet);
  border-radius: 0.8rem;
  width: 7rem;
  height: 2.2rem;
  font-size: 1rem;
  margin-left: 0.8rem;

  &:hover {
    background-color: var(--color-grey-100);
    cursor: pointer;
  }
`;
