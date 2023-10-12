import styled from "styled-components";

export const StyledCardButton = styled.a`
  margin: 0.5rem;
  border: 1px solid #a97ed9;
  border-radius: 0.8rem;
  background-color: #a97ed9;
  color: white;
  width: 7rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: #575757;
  }
`;
