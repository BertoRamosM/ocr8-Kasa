import {
  BackHome,
  ErrorContainer,
  ErrorTitle,
  ErrorSubtitle,
} from "./ErrorStyles";
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
