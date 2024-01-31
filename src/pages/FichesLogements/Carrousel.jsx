/* eslint-disable react/prop-types */
import arrowCarrousel from "../../assets/ARROW_CARROUSEL.png";
import {
  ContainerCarrousel,
  ImageCarrousel,
  ArrowCar,
  NumCar,
} from "./FichesStyles";
import useCarrousel from "../../hooks/useCarrousel";



const Carrousel = ({selectedLogement}) => {
   const { currentIndex, goToNext, goToPrevious } = useCarrousel(
     selectedLogement?.pictures.length
  );
  
  return (
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
  );
};

export default Carrousel;
