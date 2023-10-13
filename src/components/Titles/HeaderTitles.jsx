import {
  StyledHeaderMainTitle,
  StyledHeaderSubTitle,
  HeaderTitlesContainer,
} from "./styles";

const HeaderTitles = ({ mainTitle, subTitle }) => {
  return (
    <HeaderTitlesContainer className="title">
      <StyledHeaderMainTitle>{mainTitle}</StyledHeaderMainTitle>
      <StyledHeaderSubTitle>{subTitle}</StyledHeaderSubTitle>
    </HeaderTitlesContainer>
  );
};

export default HeaderTitles;
