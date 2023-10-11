/* import { jobs } from "../../data"; */
import { IoLocationSharp } from "react-icons/io5";

const Card = (props) => {
  const { id, title, location, type } = props;

  return (
    <div className="card-item">
      <h2>{title}</h2>
      <div className="card-item-location">
        <div className="card-item-location-icon">
          <IoLocationSharp />
        </div>
        <p>{location}</p>
      </div>
      <p className="card-item-type">{type}</p>
      <a>Ver detalles</a>
    </div>
  );
};

export default Card;
