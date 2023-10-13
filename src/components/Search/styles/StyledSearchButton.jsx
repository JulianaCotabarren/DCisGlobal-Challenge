import styled from "styled-components";

export const StyledSearchButton = styled.button`
  font-size: 1.1rem;
  font-family: "Red Hat Display";
  font-weight: 700;
  color: white;
  background-color: var(--color-violet);
  border: 1px solid var(--color-violet);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  width: 7rem;
  height: 2.2rem;
  margin-left: 0.8rem;

  &:hover {
    background-color: var(--color-grey-100);
    transform: scale(105%);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
