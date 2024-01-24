import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.25rem;
  max-width: 100%;
  top: 0;
  left: 0;
  position: static;
  padding: 20px 0px;
  background-color: white;
  margin-bottom: 1.87rem;
  margin-top: 1rem;
`;

export const HeaderLogo = styled.img`
  margin-left: 5.6rem;
  width: 11.14rem;
  height: 4.25rem;
  cursor: pointer;

  @media (max-width: 760px) {
    margin-left: 0;
  }

  @media (max-width: 370px) {
    width: 7.14rem;
    height: 3.25rem;
  }

  @media (max-width: 320px) {
    width: 4.14rem;
    height: 1.75rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.56rem;

  @media (max-width: 800px) {
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export const LinksHeader = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: #ff6060;
  margin-right: 5.62rem;

  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    margin-right: 2rem;
  }

  &.active {
    text-decoration: underline;
  }
`;
