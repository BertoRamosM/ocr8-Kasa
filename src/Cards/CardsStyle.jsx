import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerCard = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22.25rem, 1fr));
  place-items: center;
  background-color: #f6f6f6;
  margin-top: 3.12rem;
  border-radius: 25px;
  gap: 1rem;
`;

export const LogementCard = styled(Link)`
  width: 100%;
  max-width: 22.25rem;
  height: 21.25rem;
  position: relative;
  box-shadow: inset 0px -90px 60px -50px rgba(0, 0, 0, 0.5);
  border-radius: 0.62rem;
  margin: 1.25rem;
`;

export const LogementPic = styled.img`
  width: 22.25rem;
  height: 21.25rem;
  object-fit: cover;
  border-radius: 10px;
`;

export const LogementTitle = styled.h3`
  font-size: 1.12rem;
  position: absolute;
  color: white;
  bottom: 0.62rem;
  left: 0.93rem;
`;
