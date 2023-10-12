import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1.2rem;
  font-family: "Red Hat Display";
  font-weight: 700;
  width: 18rem;
  height: 2.2rem;
  border: 1px solid var(--color-violet);
  border-radius: 0.8rem;
  background-color: var(--color-violet);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
    transform: scale(105%);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;
