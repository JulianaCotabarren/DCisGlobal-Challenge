import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1.2rem;
  width: 18rem;
  height: 2.2rem;
  border: 1px solid var(--color-violet);
  border-radius: 0.8rem;
  background-color: var(--color-violet);
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
  }
`;
