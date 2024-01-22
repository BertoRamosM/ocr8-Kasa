import logo from "../../assets/LOGO_FOOTER.png";
import { FooterContainer, FooterLogo } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={logo} alt="kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
};

export default Footer;
