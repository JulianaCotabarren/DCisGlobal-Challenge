import { StyledHeaderMainTitle } from "./styles/StyledHeaderMainTitle";
import { StyledHeaderSubTitle } from "./styles/StyledHeaderSubTitle";
import { HeaderTitlesContainer } from "./styles/HeaderTitlesContainer";

const HeaderTitles = ({ mainTitle, subTitle }) => {
  return (
    <HeaderTitlesContainer className="title">
      <StyledHeaderMainTitle>{mainTitle}</StyledHeaderMainTitle>
      <StyledHeaderSubTitle>{subTitle}</StyledHeaderSubTitle>
    </HeaderTitlesContainer>
  );
};

export default HeaderTitles;
