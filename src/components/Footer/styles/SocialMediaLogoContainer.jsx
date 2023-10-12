import { Link } from "react-router-dom";
import styled from "styled-components";

export const SocialMediaLogoContainer = styled(Link)`
  color: var(--color-grey-0);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;
