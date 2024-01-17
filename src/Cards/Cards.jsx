import styled from "styled-components";
import { Link } from "react-router-dom";


const ContainerCard = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  place-items: center;
  background-color: #f6f6f6;
  margin-top: 50px;
  border-radius: 25px;
  gap: 15px;
`;

const LogementCard = styled(Link)`
  width: 100%; 
  max-width: 340px; 
  height: 340px; 
  position: relative;
  box-shadow: inset 0px -90px 60px -50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 20px;
  
`;

const LogementPic = styled.img`
  width: 340px;
  height: 340px;
  object-fit: cover;
  border-radius: 10px;
`;


const LogementTitle = styled.h3`
font-size: 18px;
position: absolute;
color: white;
bottom: 10px;
left: 15px;
`



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
