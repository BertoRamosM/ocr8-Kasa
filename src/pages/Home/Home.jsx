/* eslint-disable react/prop-types */
import HomeImage from "../../assets/HOME_IMG.png";
import Cards from "../../Cards/Cards";
import useFetchData from "../../hooks/useFetch";
import {
  Spinner,
  OverlayText,
  TextOverlay,
  HomePicture,
  HomeContainer,
} from "./HomeStyles";

const Home = ({ handleCardClick }) => {
  const { data, loading } = useFetchData("src/data/data.json");

  return (
    <HomeContainer>
      <HomePicture style={{ backgroundImage: `url(${HomeImage})` }}>
        <TextOverlay>
          <OverlayText>Chez vous, partout et ailleurs</OverlayText>
        </TextOverlay>
      </HomePicture>
      
      {loading ? (
        <Spinner />
      ) : (
        <Cards logements={data} handleCardClick={handleCardClick} />
      )}
    </HomeContainer>
  );
};

export default Home;
