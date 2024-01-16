import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
gap: 70px;`

const ErrorTitle = styled.h1`
  font-size: 288px;
`;


const ErrorSubtitle = styled.h2`
  font-size: 36px;
`;

const BackHome = styled(Link)`
  font-size: 18px;
  padding-bottom: 0px;
  margin-bottom: 150px;
  text-decoration: underline;
  color: #ff6060;
  border-bottom: 2px solid #ff6060;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
 &:hover{
  font-weight: 800;
 }
`;


const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>404</ErrorTitle>
      <ErrorSubtitle>
        Oups! La page que vous demandez n’existe pas.
      </ErrorSubtitle>
      <BackHome to="/">Retourner sur la page d’accueil</BackHome>
    </ErrorContainer>
  );
};

export default ErrorPage;
