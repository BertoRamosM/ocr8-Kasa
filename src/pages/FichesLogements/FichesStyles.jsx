import styled, { keyframes } from "styled-components";

export const ContainerPage = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCarrousel = styled.div`
  position: relative;
`;

export const ImageCarrousel = styled.img`
  object-fit: cover;
  width: 77.5rem;
  height: 25.9rem;
  border-radius: 1.56rem;
`;

export const ArrowCar = styled.img`
  width: 6rem;
  height: 7.4rem;
  top: 35%;
  left: 71.5rem;
  z-index: 99999;
  position: absolute;
  cursor: pointer;
`;

export const NumCar = styled.p`
  position: absolute;
  left: 50%;
  top: 90%;
  z-index: 99999;
  color: white;
  font-family: Montserrat;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.62rem;
  letter-spacing: 0em;
  text-align: center;
`;

export const LogementTitle = styled.h1`
  font-family: Montserrat;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3.18rem;
  letter-spacing: 0em;
  text-align: left;

  
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Drop = styled.div`
  width: 95%;
  padding: 0.62rem 1.24rem 0.62rem 0.93rem;
  border-radius: 5px;
  background-color: #ff6060;
  color: white;
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DropTitle = styled.h3`
  font-family: Montserrat;
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.62rem;
  letter-spacing: 0em;
  text-align: left;
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

export const HostInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const HostPic = styled.img`
  width: 4rem;
  height: 4rem;
  top: 37.6;
  left: 79.5rem;
  border-radius: 50%;
  margin-bottom: 0.3rem;
`;

export const HostName = styled.p`
  font-family: Montserrat;
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.62rem;
  letter-spacing: 0em;
  text-align: right;
  padding-right: 1.25rem;
`;

export const Location = styled.p`
  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.62rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const Rating = styled.div`
  margin-top: 1rem;
  margin-bottom: 0.3rem;
`;

export const Star = styled.img`
  width: 1.54rem;
  height: 1.5rem;
  margin-right: 0.7rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1rem;
`;

export const Tag = styled.div`
  background-color: #ff6060;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.25rem;
  letter-spacing: 0em;
  text-align: left;
`;

export const FullTextContainer = styled.div`
  height: 100%;
  width: 95%;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 1.12rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  visibility: ${({ fadeIn }) => (fadeIn ? "visible" : "hidden")};
  transition: opacity 0.45s ease-out, visibility 0.3s ease-out;
`;

export const FullText = styled.div`
  width: 100%;
  font-size: 1rem;
  padding: 1.25rem 1.25rem 1.87rem 1.25rem;
  opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
  transition: opacity 0.3s ease-out;
  animation: ${({ fadeIn }) => (fadeIn ? fadeInAnimation : fadeOutAnimation)}
    0.3s ease-out;
`;

export const InfoContainer = styled.div`
  justify-content: center;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1.87rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 0.3rem;
  max-height: 400px;
  line-height: 2;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 0.35rem;
  max-height: 400px;
  line-height: 1.5;
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
