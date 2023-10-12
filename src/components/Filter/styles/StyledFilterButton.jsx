import styled from "styled-components";

export const StyledFilterButton = styled.button`
  font-size: 0.9rem;
  padding: 0.2rem 1rem;
  height: 2rem;
  background-color: transparent;
  border: transparent;

  &:hover {
    background-color: var(--color-violet);
    transition: all 0.3s;
    border-radius: 0.2rem;
    color: white;
  }
`;
