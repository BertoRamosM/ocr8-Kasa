/* eslint-disable react/prop-types */
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
  TitleLocation,
  DropsItemContainer,
} from "./FichesStyles";

//function for the rating system
//array.from allow us to create an array based on the values numbers of rating
//the first element determines the lenght of the array : { length: maxRating }
//the second parameter will determine the value : (noparam, index)
const Rate = ({ rating }) => {
  //max rating is 5
  const maxRating = 5;
  //we pass the rating value to a int number with floor and stored in  new variable
  const filledStars = Math.floor(rating);

  //we create a new array based on the filled stars
  const stars = Array.from({ length: maxRating }, (noparam, index) => (
    //here we add the conditional. if filledStars[index] = true => StarYes icon/ if filledStars[index] => false = StarNo icon
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
  const [arrowState, setArrowState] = useState("close");

  const handleArrowClick = () => {
    setArrowState((prevState) => (prevState === "close" ? "open" : "close"));
  };

 

  return (
    <div>
      <Drop>
        <DropTitle>{title}</DropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          $isRotated={arrowState}
          onClick={handleArrowClick}
        />
        
      </Drop>
      
        <FullTextContainer $fadeIn={arrowState} >
          <FullText>{text}</FullText>
        </FullTextContainer>
      
    </div>
  );
};

const LogementDetails = ({ data, selectedLogementId }) => {
  console.log("rendered")
  //we store the index of the array
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  //NEX ARROW
  //we use the prevState to confirm that we are working with the latest version of the state
  const NextArrow = () => {
    setCurrentPictureIndex(
      //" % " (modulo operator) its used to loop only on the bounds of the array
      (prevIndex) => (prevIndex + 1) % selectedLogement.pictures.length
    );
  };

  //PREVIOUS ARROW
  const PreviousArrow = () => {
    setCurrentPictureIndex(
      (prevIndex) =>
        //add the length of the array to ensure that the number its not negative even if prevIndex -1 would be negatve
        (prevIndex - 1 + selectedLogement.pictures.length) %
        selectedLogement.pictures.length
    );
  };

  //find the match between data.id and selectedLogementId
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

        {selectedLogement.pictures.length === 1 ? null : (
          <>
            <ArrowCar
              src={arrowCarrousel}
              alt="arrow left"
              style={{
                left: 0,
                top: 138,
                transform: "rotate(180deg)",
              }}
              onClick={PreviousArrow}
            />
            <NumCar>
              {currentPictureIndex + 1} / {selectedLogement.pictures.length}
            </NumCar>
            <ArrowCar
              src={arrowCarrousel}
              alt="arrow right"
              onClick={NextArrow}
            />
          </>
        )}
      </ContainerCarrousel>

      <InfoContainer>
        <TitleLocation>
          <LogementTitle /* style={{ fontSize }} */>
            {selectedLogement.title}
          </LogementTitle>
          <Location>{selectedLogement.location}</Location>
        </TitleLocation>

        <Tags>
          {selectedLogement.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>

        <HostInfo>
          <Rate rating={selectedLogement.rating} />

          <HostName>{selectedLogement.host.name}</HostName>
          <HostPic
            src={selectedLogement.host.picture}
            alt={`picture of ${selectedLogement.host.name}`}
          />
        </HostInfo>

        <DropsItemContainer>
          <DropsItem title="Description" text={selectedLogement.description} />

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
        </DropsItemContainer>
      </InfoContainer>
    </ContainerPage>
  );
};

export default LogementDetails;
