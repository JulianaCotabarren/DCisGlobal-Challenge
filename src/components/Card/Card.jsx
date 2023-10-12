/* import { jobs } from "../../data"; */
import { IoLocationSharp } from "react-icons/io5";
import { CardContainer } from "./styles/CardContainer";
import { StyledCardTitle } from "./styles/StyledCardTitle";
import { StyledCardText } from "./styles/StyledCardText";
import { StyledCardButton } from "./styles/StyledCardButton";
import { StyledCardLocation } from "./styles/StyledCardLocation";
import { StyledCardIcon } from "./styles/StyledCardIcon";
import { StyledCardType } from "./styles/StyledCardType";

const Card = (props) => {
  const { id, title, location, type } = props;

  return (
    <CardContainer>
      <StyledCardTitle>{title}</StyledCardTitle>
      <StyledCardLocation>
        <StyledCardIcon>
          <IoLocationSharp />
        </StyledCardIcon>
        <StyledCardText>{location}</StyledCardText>
      </StyledCardLocation>
      <StyledCardType>{type}</StyledCardType>
      <StyledCardButton>Ver detalles</StyledCardButton>
    </CardContainer>
  );
};

export default Card;
