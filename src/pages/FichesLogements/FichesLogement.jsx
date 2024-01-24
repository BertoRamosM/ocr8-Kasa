/* eslint-disable react/prop-types */
import arrowCarrousel from "../../assets/ARROW_CARROUSEL.png";
import { Rate } from "./Rating.jsx";
import { Spinner } from "../Home/HomeStyles";
import { DropsItem } from "../../hooks/useDropsItems";
import {
  ContainerPage,
  ContainerCarrousel,
  ImageCarrousel,
  ArrowCar,
  NumCar,
  LogementTitle,
  HostInfo,
  HostPic,
  HostName,
  Location,
  Tags,
  Tag,
  InfoContainer,
  TitleLocation,
  DropsItemContainer,
} from "./FichesStyles";
import useCarrousel from "../../hooks/useCarrousel";
import useFetchData from "../../hooks/useFetch.jsx";
import { useEffect } from "react";



const LogementDetails = ({ data, selectedLogementId }) => {
  const { loading } = useFetchData();

  
  //find the match between data.id and selectedLogementId
  const selectedLogement = data.find(
    (logement) => logement.id === selectedLogementId
  );

  //get the id from the localstorage if any
  useEffect(() => {
    if (selectedLogementId) {
      localStorage.setItem("selectedLogementId", selectedLogementId);
    }
  }, []);

  //custom hook useCarrousel
  const { currentIndex, goToNext, goToPrevious } = useCarrousel(
    selectedLogement.pictures.length
  );

  return loading ? (
    <Spinner />
  ) : (
    <ContainerPage>
      <ContainerCarrousel>
        <ImageCarrousel
          src={selectedLogement.pictures[currentIndex]}
          alt={selectedLogement.title}
        />

        {selectedLogement.pictures.length > 1 && (
          <>
            <ArrowCar
              src={arrowCarrousel}
              alt="arrow left"
              style={{
                left: 0,
                top: 138,
                transform: "rotate(180deg)",
              }}
              onClick={() => goToPrevious(selectedLogement)}
            />
            <NumCar>
              {currentIndex + 1} / {selectedLogement.pictures.length}
            </NumCar>
            <ArrowCar
              src={arrowCarrousel}
              alt="arrow right"
              onClick={() => goToNext(selectedLogement)}
            />
          </>
        )}
      </ContainerCarrousel>

      <InfoContainer>
        <TitleLocation>
          <LogementTitle>{selectedLogement.title}</LogementTitle>
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
