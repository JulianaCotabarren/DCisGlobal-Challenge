import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooterLink = styled(Link)`
  color: var(--color-grey-0);
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;

  &:hover {
    color: var(--color-light-blue);
    transition: 0.3s ease-out;
  }
`;
