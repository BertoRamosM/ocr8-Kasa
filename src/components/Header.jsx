import logo from '../assets/LOGO_HEADER.png'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  width: 100%;
  top: 0px;
  left: 0;
  position: static;
  padding: 20px 0px;
  background-color: white;
  margin-bottom: 30px;
  margin-top: 1rem;
`;

const HeaderLogo = styled.img`
margin-left: 90px;
width: 210.32px;
height: 68px;
`;

const LinksContainer = styled.div`
display: flex;
flex-direction: row;
font-size: 24px
`

const LinksHeader = styled(Link)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: #ff6060;
  margin-right: 90px;
  &:hover {
    color: #ff6060;
    text-decoration: underline;
  }
`;






const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="logo of the app Kasa" />
      <LinksContainer>
        <LinksHeader to="/">Accueil</LinksHeader>
        <LinksHeader to="/a-propos">A propos</LinksHeader>
      </LinksContainer>
    </HeaderContainer>
  );
}
 
export default Header;