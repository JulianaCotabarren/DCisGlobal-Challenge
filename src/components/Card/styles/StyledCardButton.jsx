import styled from "styled-components";

export const StyledCardButton = styled.a`
  font-family: "Red Hat Display";
  font-weight: 700;
  margin: 0.5rem;
  border: 1px solid var(--color-violet);
  border-radius: 0.8rem;
  background-color: var(--color-violet);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
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
    transform: scale(105%);
    transition: all 0.2s ease-in-out;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }
`;
