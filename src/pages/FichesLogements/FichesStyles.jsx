import styled, { keyframes } from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCarrousel = styled.div`
  position: relative;
  width: 90%;
  height: 25.9rem;
`;

export const ImageCarrousel = styled.img`
  object-fit: cover;
  width: 100%;
  height: 25.9rem;
  border-radius: 1.56rem;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ArrowCar = styled.img`
  width: 6rem;
  height: 7.4rem;
  top: 38%;
  right: 0;
  z-index: 99999;
  position: absolute;
  cursor: pointer;

  @media (max-width: 800px) {
    width: 5rem;
    height: 6rem;
  }

  @media (max-width: 400px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const TitleLocation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 90%;
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
  font-size: 2rem;
  font-weight: 500;
  line-height: 3.18rem;
  letter-spacing: 0em;
  text-align: left;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 950px) {
    font-size: 1.4rem;
  }

  @media (max-width: 650px) {
    font-size: 1.4rem;
  }

  @media (max-width: 550px) {
    font-size: 1.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
  }
`;

export const RateContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const DropsItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  grid-gap: 1rem;
  align-items: flex-start;

  grid-template-areas:
    "item1 item2"
    "item3 item4";

  & > div {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 1rem;
  }

  & > div:nth-child(1) {
    grid-area: item1;
  }

  & > div:nth-child(2) {
    grid-area: item2;
  }

  & > div:nth-child(3) {
    grid-area: item3;
  }

  & > div:nth-child(4) {
    grid-area: item4;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 2rem;
  }
`;

export const Drop = styled.div`
  width: 100%;
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

export const HostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;

export const HostPic = styled.img`
  width: 4rem;
  height: 4rem;
  top: 37.6px;
  left: 0;
  border-radius: 50%;
  margin-bottom: 0.3rem;
  margin-left: 0.5rem;

  @media (max-width: 800px) {
    width: 3.5rem;
    height: 3.5rem;
  }

  @media (max-width: 400px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const HostName = styled.p`
  font-family: Montserrat;
  font-size: 1.12rem;
  font-weight: 500;
  line-height: 1.62rem;
  letter-spacing: 0em;
  text-align: right;
  margin-left: auto;

  @media (max-width: 320px) {
    font-size: 0.8rem;
  }
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
  flex-wrap: nowrap;

  @media (max-width: 350px) {
    width: 100%;
  }
`;

export const Star = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;

  @media (max-width: 350px) {
    width: 0.7rem;
    height: 0.7rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
  margin-right: auto;
  padding-left: 4rem;

  @media (max-width: 1024px) {
    width: 90%;
    padding-left: 2rem;
  }
  @media (max-width: 760px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    padding-left: 1rem;
  }
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

export const InfoContainer = styled.div`
  justify-content: center;
  width: 90%;
  display: flex;
  align-items: center;
  padding-top: 1.87rem;
  flex-direction: column;
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
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 1.12rem;
  overflow: hidden;

  height: ${({ $fadeIn }) => ($fadeIn === "open" ? "200px" : "0")};
  transition: height 0.3s ease-out, transform 0.3s ease-in-out;
  transition-delay: ${({ $fadeIn }) => ($fadeIn === "close" ? "0s" : "0s")};
  animation: ${({ $fadeIn }) =>
      $fadeIn === "close" ? fadeOutAnimation : fadeInAnimation}
    0.3s ease-in-out;
`;

export const FullText = styled.div`
  width: 90%;
  font-size: 1rem;
  padding: 1.5rem 1.25rem 1rem 1.25rem;
  overflow: hidden;

  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
