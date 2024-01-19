import styled, { keyframes } from "styled-components";

export const AboutContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutPicture = styled.div`
  width: 90%;
  height: 13.9rem;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position:relative;
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

export const AboutDropTitle = styled.h2`
  font-family: Montserrat;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.12rem;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 1.25rem;
`;

export const ArrowIcon = styled.img.attrs((props) => ({
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

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(5px);
  }
`;

export const FullTextContainer = styled.div`
  width: 63.9rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  padding-bottom: 1.62rem;
  font-size: 1.12rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  visibility: ${({ fadeIn }) => (fadeIn ? "visible" : "hidden")};
  transition: opacity 0.45s ease-out, visibility 0.3s ease-out;
`;

export const FullText = styled.div`
  padding-top: 1.25rem;
  padding-left: 1.25rem;
  padding-bottom: 1.87rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  animation: ${({ fadeIn }) => (fadeIn ? fadeInAnimation : fadeOutAnimation)}
    0.3s ease-out;
`;
