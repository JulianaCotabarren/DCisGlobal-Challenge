import styled from "styled-components";

export const StyledCardButton = styled.a`
  margin: 0.5rem;
  border: 1px solid var(--color-violet);
  border-radius: 0.8rem;
  background-color: var(--color-violet);
  color: white;
  width: 7rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: var(--color-grey-100);
  }
`;
