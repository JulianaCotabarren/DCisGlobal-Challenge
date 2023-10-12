import { BodyTitlesContainer } from "./styles/BodyTitlesContainer";
import { StyledBodyPreTitle } from "./styles/StyledBodyPreTitle";
import { StyledBodyTitle } from "./styles/StyledBodyTitle";

const BodyTitles = ({ preTitle, bodyTitle }) => {
  return (
    <BodyTitlesContainer>
      <StyledBodyPreTitle>{preTitle}</StyledBodyPreTitle>
      <StyledBodyTitle>{bodyTitle}</StyledBodyTitle>
    </BodyTitlesContainer>
  );
};

export default BodyTitles;
