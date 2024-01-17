import styled from "styled-components";
import arrow from "../../assets/ARROW.png";
import { useState } from "react";
import { useEffect } from "react";

const ContainerPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`

const ImageCarrousel = styled.img`
  object-fit: cover;
  width: 1240px;
  height: 415px;
  border-radius: 25px;
`;


const LogementTitle = styled.h1`
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 500;
  line-height: 51px;
  letter-spacing: 0em;
  text-align: left;
`;

const Drop = styled.div`
  width: 582px;
  height: 52px;
  padding: 10px 20px 10px 15px;
  border-radius: 5px;
  background-color: #ff6060;
  color: white;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropTitle = styled.h3`
`

const ArrowIcon = styled.img.attrs((props) => ({
  style: {
    transform: props.isRotated ? "rotate(-180deg)" : "rotate(0deg)",
  },
}))`
  margin-right: 20px;
  cursor: pointer;
  transform: rotate(${(props) => (props.isRotated ? "180deg" : "0deg")});
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
`;




const LogementDetails = ({ data, selectedLogementId }) => {
const [arrowState, setArrowState] = useState(Array(2).fill(false));

  const handleArrowClick = (index) => {
    setArrowState((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  

  if (!selectedLogementId) {
    return <p>Data not available</p>;
  }

    const selectedLogement = data.find(
      (logement) => logement.id === selectedLogementId
  );
  


  return (
    <ContainerPage>
      <ImageCarrousel
        src={selectedLogement.cover}
        alt={selectedLogement.title}
      />
      <LogementTitle>{selectedLogement.title}</LogementTitle>
      <p>{selectedLogement.host.name}</p>
      <img
        src={selectedLogement.host.picture}
        alt={`picture of ${selectedLogement.host.name}`}
      />
      <p>{selectedLogement.location}</p>
      <p>{selectedLogement.rating}</p>

      <p>{selectedLogement.tags}</p>

      <Drop>
        <DropTitle>Description</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState[0]}
          onClick={()=>handleArrowClick(0)}
        />
      </Drop>

      <Drop>
        <DropTitle>Description</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState[1]}
          onClick={()=>handleArrowClick(1)}
        />
      </Drop>
    </ContainerPage>
  );
};

export default LogementDetails;
