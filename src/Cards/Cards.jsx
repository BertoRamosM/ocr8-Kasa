/* eslint-disable react/prop-types */
import {
  ContainerCard,
  LogementCard,
  LogementPic,
  LogementTitle,
} from "./CardsStyle";

const CardsLogement = ({ logements, handleCardClick }) => {

  return (
    <ContainerCard>
      {logements.map((logement) => (
        <LogementCard
          key={logement.id}
          to={`/logement/${logement.id}`}
          onClick={(e) => handleCardClick(e, logement.id)}
        >
          <LogementPic src={logement.cover} alt={logement.title} />
          <LogementTitle>{logement.title}</LogementTitle>
        </LogementCard>
      ))}
    </ContainerCard>
  );
};

export default CardsLogement;
