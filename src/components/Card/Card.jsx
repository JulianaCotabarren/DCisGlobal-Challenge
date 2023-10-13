import { IoLocationSharp } from "react-icons/io5";
import {
  CardContainer,
  StyledCardTitle,
  StyledCardText,
  StyledCardButton,
  StyledCardLocation,
  StyledCardIcon,
  StyledCardType,
} from "./styles";

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
