import { MainTitle } from "./styles/MainTitle";
import { SubTitle } from "./styles/SubTitle";
import { TitleContainer } from "./styles/TitleContainer";

const Titles = ({ mainTitle, subTitle }) => {
  return (
    <TitleContainer className="title">
      <MainTitle>{mainTitle}</MainTitle>
      <SubTitle>{subTitle}</SubTitle>
    </TitleContainer>
  );
};

export default Titles;
