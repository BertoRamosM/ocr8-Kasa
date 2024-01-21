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
    transform: props.$isRotated ? "rotate(-180deg)" : "rotate(0deg)",
  },
}))`
  margin-right: 1.25rem;
  cursor: pointer;
  transform: rotate(${(props) => (props.$isRotated ? "180deg" : "0deg")});
  transition: transform 0.3s ease-in-out;
  transform-origin: center;
`;

const fadeInAnimation = keyframes`
  from {
    transform: translateY(-50%) scaleY(0);
    opacity: 0;
  }
  to {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
  to {
    transform: translateY(-50%) scaleY(0);
    opacity: 0;
  }
`;

export const FullTextContainer = styled.div`
  width: 70%;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding-bottom: 1.62rem;
  font-size: 1.12rem;
  animation: ${({ $fadeIn }) => ($fadeIn ? fadeInAnimation : fadeOutAnimation)} 0.3s ease-out;
`;

export const FullText = styled.div`
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-bottom: 1.87rem;
  animation: ${({ $fadeIn }) => ($fadeIn ? fadeInAnimation : fadeOutAnimation)} 0.5s ease-out;
`;