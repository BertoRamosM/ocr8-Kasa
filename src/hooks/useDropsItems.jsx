/* eslint-disable react/prop-types */
//function for the drop menus
import useDropdown from "./UseDrops";
import arrow from "../assets/ARROW.png";
import {
  Drop,
  DropTitle,
  ArrowIcon,
  FullTextContainer,
  FullText,
} from "../pages/FichesLogements/FichesStyles";

export const DropsItem = ({ title, text }) => {
  const [arrowState, handleArrowClick] = useDropdown("close");

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

      <FullTextContainer $fadeIn={arrowState}>
        <FullText>{text}</FullText>
      </FullTextContainer>
    </div>
  );
};
