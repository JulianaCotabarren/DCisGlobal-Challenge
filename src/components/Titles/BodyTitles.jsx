import {
  BodyTitlesContainer,
  StyledBodyPreTitle,
  StyledBodyTitle,
} from "./styles";

const BodyTitles = ({ preTitle, bodyTitle }) => {
  return (
    <BodyTitlesContainer>
      <StyledBodyPreTitle>{preTitle}</StyledBodyPreTitle>
      <StyledBodyTitle>{bodyTitle}</StyledBodyTitle>
    </BodyTitlesContainer>
  );
};

export default BodyTitles;
