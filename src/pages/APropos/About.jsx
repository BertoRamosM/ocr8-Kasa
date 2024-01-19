/* eslint-disable react/prop-types */
import AboutPic from "../../assets/ABOUT_IMG.png";
import arrow from "../../assets/ARROW.png";
import { useState } from "react";
import {
  AboutContainer,
  AboutPicture,
  PicOverlay,
  AboutDrop,
  AboutDropTitle,
  ArrowIcon,
  FullTextContainer,
  FullText,
} from "./AboutStyles";

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
      <AboutPicture style={{ backgroundImage: `url(${AboutPic})` }}>
        <PicOverlay />
      </AboutPicture>
      
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
