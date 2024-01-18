import arrow from "../../assets/ARROW.png";
import arrowCarrousel from "../../assets/ARROW_CARROUSEL.png";
import { useState } from "react";
import StarYes from "../../assets/STAR_YES.png";
import StarNo from "../../assets/STAR_NO.png";
import {
  ContainerPage,
  ContainerCarrousel,
  ImageCarrousel,
  ArrowCar,
  NumCar,
  LogementTitle,
  Drop,
  DropTitle,
  ArrowIcon,
  HostInfo,
  HostPic,
  HostName,
  Location,
  Rating,
  Star,
  Tags,
  Tag,
  FullTextContainer,
  FullText,
  InfoContainer,
  RightContainer,
  LeftContainer,
} from "./FichesStyles";

//function for the rating system
const Rate = ({ rating }) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);

  const stars = Array.from({ length: maxRating }, (noparam, index) => (
    <Star
      key={index}
      src={index < filledStars ? StarYes : StarNo}
      alt={index < filledStars ? "Filled Star" : "Empty Star"}
    />
  ));

  return <Rating>{stars}</Rating>;
};



//function for the drop menus
const DropsItem = ({ title, text }) => {
  const [arrowState, setArrowState] = useState(false);

  const handleArrowClick = () => {
    setArrowState((prevState) => !prevState);
  };


    const marginTopStyle =
      title === "Équipements" ? { marginTop: "-27px" } : {};

  return (
    <>
      <Drop>
        <DropTitle>{title}</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState}
          onClick={handleArrowClick}
        />
      </Drop>
      {arrowState && (
        <FullTextContainer fadeIn={arrowState} style={marginTopStyle}>
          <FullText fadeIn={arrowState}>{text}</FullText>
        </FullTextContainer>
      )}
    </>
  );
};

const LogementDetails = ({ data, selectedLogementId }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const NextArrow = () => {
    setCurrentPictureIndex(
      //" % " its used to loop only on the bounds of the array
      (prevIndex) => (prevIndex + 1) % selectedLogement.pictures.length
    );
  };
  const PreviousArrow = () => {
    setCurrentPictureIndex(
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

      <InfoContainer>
        <LeftContainer>
          <LogementTitle>{selectedLogement.title}</LogementTitle>
          <Location>{selectedLogement.location}</Location>

          <Tags>
            {selectedLogement.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <DropsItem title="Description" text={selectedLogement.description} />

          <FullTextContainer>
            <FullText>{selectedLogement.description}</FullText>
          </FullTextContainer>
        </LeftContainer>

        <RightContainer>
          <HostInfo>
            <HostName>{selectedLogement.host.name}</HostName>
            <HostPic
              src={selectedLogement.host.picture}
              alt={`picture of ${selectedLogement.host.name}`}
            />
          </HostInfo>
          <Rate rating={selectedLogement.rating} />

          <DropsItem
            title="Équipements"
            text={
              <ul>
                {selectedLogement.equipments.map((equipment, index) => (
                  <li key={index} style={{ listStyleType: "none" }}>
                    {equipment}
                  </li>
                ))}
              </ul>
            }
          ></DropsItem>
        </RightContainer>
      </InfoContainer>
    </ContainerPage>
  );
};

export default LogementDetails;
