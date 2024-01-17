import styled from "styled-components";
import HomeImage from "../../assets/HOME_IMG.png";
import Cards from "../../Cards/Cards"
import useFetchData from "../../hooks/useFetch";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HomePicture = styled.img`
  position: relative;
  width: 90%;
  height: 223px;
  object-fit: cover;
  border-radius: 20px;
`;

const TextOverlay = styled.div`
  font-family: montserrat;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 24px;
  background-color: black;
  width: 90%;
  height: 223px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayText = styled.h1`
  color: white;
`;


const Spinner = styled.div`
  margin-top: 30px;
  border: 4px solid white;
  border-radius: 50%;
  border-top: 5px solid #ff6060;
  width: 80px;
  height: 80px;
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
