import logo from "../../assets/LOGO_HEADER.png";
import {
  HeaderContainer,
  HeaderLogo,
  LinksContainer,
  LinksHeader,
} from "./HeaderStyles";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


const Header = () => {

  const location = useLocation(); 
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  useEffect(()=> {
    setIsHome(location.pathname === "/");

    setIsAbout(location.pathname === "/a-propos")
  }),[location.pathname]


  
  return (
    <HeaderContainer>
      <HeaderLogo
        src={logo}
        alt="logo of the app Kasa"
        onClick={() => (window.location.href = "/")}
      />
      <LinksContainer>
        <LinksHeader to="/" style={{textDecoration : isHome ? 'underline': 'none'}}>Accueil</LinksHeader>
        <LinksHeader to="/a-propos" style={{textDecoration: isAbout ? 'underline':'none   '}}>A propos</LinksHeader>
      </LinksContainer>
    </HeaderContainer>
  );
};

export default Header;
