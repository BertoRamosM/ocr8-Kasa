import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.25rem;
  width: 100%;
  top: 0px;
  left: 0;
  position: static;
  padding: 20px 0px;
  background-color: white;
  margin-bottom: 1.87rem;
  margin-top: 1rem;
`;

export const HeaderLogo = styled.img`
  margin-left: 5.6rem;
  width: 13.14rem;
  height: 4.25rem;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.56rem;
`;

export const LinksHeader = styled(Link)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: #ff6060;
  margin-right: 5.62rem;
  &:hover {
    color: #ff6060;
    text-decoration: underline;
  }
`;