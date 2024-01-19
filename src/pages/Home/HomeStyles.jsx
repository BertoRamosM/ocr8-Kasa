import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const HomePicture = styled.div`
  width: 90%;
  height: 13.93rem;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  background-position center;
`;

export const TextOverlay = styled.div` 
  font-family: montserrat;
  color: white;
  text-align: center;
  font-size: 1.5rem;
  background-color: black;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OverlayText = styled.h1`
  color: white;
`;

export const Spinner = styled.div`
  margin-top: 1.87rem;
  border: 4px solid white;
  border-radius: 50%;
  border-top: 5px solid #ff6060;
  width: 5rem;
  height: 5rem;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
