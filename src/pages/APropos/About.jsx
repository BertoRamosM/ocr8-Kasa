import AboutPic from "../../assets/ABOUT_IMG.png";
import styled, {keyframes} from "styled-components";
import arrow from "../../assets/ARROW.png";
import { useState } from "react";


const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const AboutPicture = styled.img`
  width: 90%;
  height: 13.9rem;
  object-fit: cover;
  border-radius: 20px;
`;
const PicOverlay = styled.div`
  font-family: montserrat;
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  background-color: black;
  width: 90%;
  height: 13.9rem;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin-bottom: 3.12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const AboutDrop = styled.div`
  width: 63.9rem;
  height: 3.25rem;
  padding: 0.62rem 1.25rem 0.62rem 0.93rem;
  border-radius: 5px;
  background-color: #ff6060;
  color: white;
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutDropTitle = styled.h2`
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.12rem;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 1.25rem;
`;


const ArrowIcon = styled.img.attrs((props) => ({
  style: {
    transform: props.isRotated ? "rotate(-180deg)" : "rotate(0deg)",
  },
}))`
  margin-right: 1.25rem;
  cursor: pointer;
  transform: rotate(${(props) => (props.isRotated ? "180deg" : "0deg")});
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(5px);
  }
`;

const FullTextContainer = styled.div`
  width: 63.9rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding-bottom: 1.62rem;
  font-size: 1.12rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  visibility: ${({ fadeIn }) => (fadeIn ? "visible" : "hidden")};
  transition: opacity 0.45s ease-out, visibility 0.3s ease-out;
`;



const FullText = styled.div`
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-bottom: 1.87rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  animation: ${({ fadeIn }) => (fadeIn ? fadeInAnimation : fadeOutAnimation)}
    0.3s ease-out;
`;


const AboutItem = ({ title, text }) => {
  const [arrowState, setArrowState] = useState(false);

  const handleArrowClick = () => {
    setArrowState((prevState) => !prevState);
  };

  return (
    <>
      <AboutDrop>
        <AboutDropTitle>{title}</AboutDropTitle>
        <ArrowIcon
          src={arrow}
          alt="arrow icon"
          isRotated={arrowState}
          onClick={handleArrowClick}
        />
      </AboutDrop>
      {arrowState && (
        <FullTextContainer fadeIn={arrowState}>
          <FullText fadeIn={arrowState}>{text}</FullText>
        </FullTextContainer>
      )}
    </>
  );
};




const About = () => {
  return (
    <AboutContainer>
      <AboutPicture src={AboutPic} alt="landscape picture" />
      <PicOverlay />

      <AboutItem
        title="Fiabilité"
        text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      />

      <AboutItem
        title="Respect"
        text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />

      <AboutItem
        title="Service"
        text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />

      <AboutItem
        title="Sécurité"
        text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    </AboutContainer>
  );
};

export default About;