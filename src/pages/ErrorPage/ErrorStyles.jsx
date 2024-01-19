import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 4.37rem;
`;

export const ErrorTitle = styled.h1`
  font-size: 18rem;
`;

export const ErrorSubtitle = styled.h2`
  font-size: 2.25rem;
`;

export const BackHome = styled(Link)`
  font-size: 1.12rem;
  padding-bottom: 0px;
  margin-bottom: 9.37rem;
  text-decoration: underline;
  color: #ff6060;
  border-bottom: 2px solid #ff6060;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    font-weight: 800;
  }
`;
