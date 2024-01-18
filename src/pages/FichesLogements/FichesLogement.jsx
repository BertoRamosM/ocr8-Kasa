import styled from "styled-components";
import arrow from "../../assets/ARROW.png";
import arrowCarrousel from "../../assets/ARROW_CARROUSEL.png";
import { useState } from "react";
import StarYes from "../../assets/STAR_YES.png";
import StarNo from "../../assets/STAR_NO.png";


const ContainerPage = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;`

const ContainerCarrousel = styled.div`
position: relative;
`

const ImageCarrousel = styled.img`
  object-fit: cover;
  width: 1240px;
  height: 415px;
  border-radius: 25px;
`;

const ArrowCar = styled.img`
width: 96px;
height: 119.64px;
top: 140.83px;
left: 1144px;
z-index: 99999;
position: absolute;
`;

const NumCar = styled.p`
  position: absolute;
  left: 50%;
  top: 90%;
  z-index: 99999;
  color: white;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: center;
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
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

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

const HostPic = styled.img`
width: 64px;
height: 64px;
top: 602px;
left: 1273px;
border-radius: 50%;
`;

const HostName = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: right;
`;

const Location = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

const Rating = styled.div`
width: 196px;
height: 36px;
top: 687px;
left: 1144px;
`;

const Star = styled.img`
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  background-color: #ff6060;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`;



const FullTextContainer = styled.div`
  width: 80%;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding-bottom: 10px;
  font-size: 18px;
  
`;

const FullText = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 30px;
  
`;


const Rate = ({ rating }) => {
  const maxRating = 5; 
  const filledStars = Math.floor(rating);
  const emptyStars = maxRating - filledStars;

  const stars = [];
  for (let i = 0; i < filledStars; i++) {
    stars.push(<Star key={i} src={StarYes} alt="Filled Star" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star key={filledStars + i} src={StarNo} alt="Empty Star" />
    );
  }

  return <Rating>{stars}</Rating>;
};



const LogementDetails = ({ data, selectedLogementId }) => {
  const [arrowState, setArrowState] = useState(Array(2).fill(false));
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);



  const handleArrowClick = (index) => {
    setArrowState((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };



   const NextArrow = () => {
     setCurrentPictureIndex(
     //" % " its used to loop only on the bounds of the array
       (prevIndex) => (prevIndex + 1) % selectedLogement.pictures.length
     );
  };
  const PreviousArrow = () => {
    setCurrentPictureIndex(
      //" % " its used to loop only on the bounds of the array
      (prevIndex) =>
        (prevIndex - 1 + selectedLogement.pictures.length) %
        selectedLogement.pictures.length
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
      <ContainerCarrousel>
        <ImageCarrousel
          src={selectedLogement.pictures[currentPictureIndex]}
          alt={selectedLogement.title}
        />
        <ArrowCar
          src={arrowCarrousel}
          alt="arrow left"
          style={{
            left: 0,
            transform: "rotate(180deg)",
          }}
          onClick={PreviousArrow}
        ></ArrowCar>
        <NumCar>
          {" "}
          {currentPictureIndex + 1} / {selectedLogement.pictures.length}
        </NumCar>
        <ArrowCar
          src={arrowCarrousel}
          alt="arrow right"
          onClick={NextArrow}
        ></ArrowCar>
      </ContainerCarrousel>
      <LogementTitle>{selectedLogement.title}</LogementTitle>
      <HostName>{selectedLogement.host.name}</HostName>
      <HostPic
        src={selectedLogement.host.picture}
        alt={`picture of ${selectedLogement.host.name}`}
      />
      <Location>{selectedLogement.location}</Location>
      <Rate rating={selectedLogement.rating} />
      <Tags>
        {selectedLogement.tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Drop>
        <DropTitle>Description</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState[0]}
          onClick={() => handleArrowClick(0)}
        />
      </Drop>

      <FullTextContainer >
        <FullText>{selectedLogement.description}</FullText>
      </FullTextContainer>

      <Drop>
        <DropTitle>Équipements</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState[1]}
          onClick={() => handleArrowClick(1)}
        />
      </Drop>

      <FullTextContainer>
        <FullText>{selectedLogement.equipments}</FullText>
      </FullTextContainer>
    </ContainerPage>
  );
};

export default LogementDetails;
