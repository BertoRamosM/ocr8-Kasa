import styled from "styled-components";

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


export const AboutDropsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
 
`;
