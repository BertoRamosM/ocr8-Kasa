import logo from '../assets/LOGO_FOOTER.png'
import styled from 'styled-components';

const FooterContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
height: 169px;
position: static;
bottom:0;
left: 0;
background-color: black;
color: white;
margin: 0;
padding: 0;
margin-top: 40px;`


const FooterLogo = styled.img`
color: white;`


const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}
 
export default Footer;