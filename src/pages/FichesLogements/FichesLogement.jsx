/* eslint-disable react/prop-types */
import { Rate } from "./Rating.jsx";
import { Spinner } from "../Home/HomeStyles";
import {
  ContainerPage,
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
import useFetchData from "../../hooks/useFetch.jsx";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel.jsx";
import DropsItems from "./DropsItems.jsx";

const LogementDetails = ({ data, selectedLogementId }) => {
  const { loading } = useFetchData();
  let { id } = useParams();
  const navigate = useNavigate();

  //find the match between data.id and selectedLogementId
  const selectedLogement = data.find((logement) => logement.id === id);

 

  //get the id from the localstorage if any
  useEffect(() => {
    if (typeof selectedLogement === "undefined") {
      //the true prevents user to come back to previous "broken" page
      navigate("/notfound", { replace: true });
    }
    if (selectedLogementId) {
      localStorage.setItem("selectedLogementId", selectedLogementId);
    }
  }, []);

  //custom hook useCarrousel

  return loading ? (
    <Spinner />
  ) : (
      <ContainerPage>
        
        
        < Carrousel selectedLogement={selectedLogement}
          data={data} />

      

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
            <DropsItems selectedLogement={selectedLogement} />
        </DropsItemContainer>
      </InfoContainer>
    </ContainerPage>
  );
};

export default LogementDetails;
