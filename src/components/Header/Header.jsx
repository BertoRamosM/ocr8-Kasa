import logo from "../../assets/LOGO_HEADER.png";
import {
  HeaderContainer,
  HeaderLogo,
  LinksContainer,
  LinksHeader,
} from "./HeaderStyles";


const Header = () => {
 
  return (
    <HeaderContainer>
      <HeaderLogo
        src={logo}
        alt="logo of the app Kasa"
        onClick={() => (window.location.href = "/")}
      />
      <LinksContainer>
        <LinksHeader to="/" activeclassname="active">
          ACCUEIL
        </LinksHeader>
        <LinksHeader to="/a-propos" activeclassname="active">
          A PROPOS
        </LinksHeader>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
