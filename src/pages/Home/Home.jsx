import styled from "styled-components";
import HomeImage from "../../assets/HOME_IMG.png";
import Cards from "../../Cards/Cards"
import useFetchData from "../../hooks/useFetch";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const HomePicture = styled.img`
  width: 90%;
  height: 13.93rem;
  object-fit: cover;
  border-radius: 20px;
`;

const TextOverlay = styled.div`
  font-family: montserrat;
  position: absolute;
  top: 3.7%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  background-color: black;
  width: 90%;
  height: 13.9rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayText = styled.h1`
  color: white;
`;


export const Spinner = styled.div`
  margin-top: 1.87rem;
  border: 4px solid white;
  border-radius: 50%;
  border-top: 5px solid #ff6060;
  width: 5rem;
  height: 5rem;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;



const Home = ({ handleCardClick }) => {
  const { data, loading } = useFetchData("src/data/data.json");

  return (
    <HomeContainer>
      <HomePicture src={HomeImage} alt="picture of landscape" />
      <TextOverlay>
        <OverlayText>Chez vous, partout et ailleurs</OverlayText>
      </TextOverlay>
      {loading ? (
        <Spinner />
      ) : (
        <Cards logements={data} handleCardClick={handleCardClick} />
      )}
    </HomeContainer>
  );
};

export default Home;
