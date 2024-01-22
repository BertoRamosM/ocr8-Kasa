import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const AboutPicture = styled.div`
  width: 90%;
  height: 13.9rem;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  margin-bottom: 2rem;
  margin-top: 2rem;
`;
export const PicOverlay = styled.div`
  text-align: center;
  font-size: 1.5rem;
  background-color: black;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
`;

export const AboutDrop = styled.div`
  width: 70%;
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

export const AboutDropTitle = styled.h2`
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.12rem;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 1.25rem;

  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const ArrowIcon = styled.img.attrs((props) => ({
  style: {
    transform: props.$isRotated === "open" ? "rotate(-180deg)" : "rotate(0deg)",
  },
}))`
  margin-right: 1.25rem;
  cursor: pointer;
  transform: rotate(
    ${(props) => (props.isRotated === "open" ? "180deg" : "0deg")}
  );
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
`;
const fadeInAnimation = keyframes`
  from {
    transform: scaleY(0);
    transform-origin: top;
  }
  to {
    transform: scaleY(1);
    transform-origin: top;
    

  }
`;

const fadeOutAnimation = keyframes`
  from {
    transform: scaleY(1);
    transform-origin: top;
  }
  to {
    transform: scaleY(0);
    transform-origin: top;
  }
`;

export const FullTextContainer = styled.div`
  width: 70%;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 1.12rem;
  overflow: hidden;

  height: ${({ $fadeIn }) => ($fadeIn === "open" ? "140px" : "0")};
  transition: height 0.3s ease-out, transform 0.3s ease-in-out;
  transition-delay: ${({ $fadeIn }) => ($fadeIn === "close" ? "0s" : "0s")};
  animation: ${({ $fadeIn }) =>
      $fadeIn === "close" ? fadeOutAnimation : fadeInAnimation}
    0.3s ease-in-out;
`;

export const FullText = styled.div`
  width: 100%;
  font-size: 1rem;
  padding: 1.5rem 1.25rem 1rem 1.25rem;
  overflow: hidden;

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
  }

  @media (max-width: 350px) {
    font-size: 0.6rem;
  }
`;

export const AboutDropsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;
