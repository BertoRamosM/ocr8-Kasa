import  { useState, useEffect } from "react";
import styled from "styled-components";
import HomeImage from "../../assets/HOME_IMG.png";
import Cards from "../../Cards/Cards"

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

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("src/data/data.json");
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <HomePicture src={HomeImage} alt="picture of landscape" />
      <TextOverlay>
        <OverlayText>Chez vous, partout et ailleurs</OverlayText>
      </TextOverlay>
      <Cards logements={logements} />
    </HomeContainer>
  );
};

export default Home;
