import {
  FooterContainer,
  FooterLinksContainer,
  SocialIconsContainer,
  SocialMediaContainer,
  SocialMediaLogoContainer,
  StyledFooter,
  StyledFooterLink,
  StyledFooterLinkItems,
  StyledFooterLinkTitle,
  StyledFooterLinks,
  StyledSocialIconLink,
  StyledSocialMedia,
  WebsiteRights,
} from "./styles";
import { BsFacebook, BsYoutube, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <StyledFooter>
        <FooterLinksContainer>
          <StyledFooterLinks>
            <StyledFooterLinkItems>
              <StyledFooterLinkTitle>About Us</StyledFooterLinkTitle>
              <StyledFooterLink to="/">History</StyledFooterLink>
              <StyledFooterLink to="/">Services</StyledFooterLink>
              <StyledFooterLink to="/">Partners</StyledFooterLink>
              <StyledFooterLink to="/">Investors</StyledFooterLink>
            </StyledFooterLinkItems>
            <StyledFooterLinkItems>
              <StyledFooterLinkTitle>Contact Us</StyledFooterLinkTitle>
              <StyledFooterLink to="/">Contact</StyledFooterLink>
              <StyledFooterLink to="/">Testimonials</StyledFooterLink>
              <StyledFooterLink to="/">Employees</StyledFooterLink>
              <StyledFooterLink to="/">Locations</StyledFooterLink>
            </StyledFooterLinkItems>
            <StyledFooterLinkItems>
              <StyledFooterLinkTitle>Social Media</StyledFooterLinkTitle>
              <StyledFooterLink to="/">Instagram</StyledFooterLink>
              <StyledFooterLink to="/">Facebook</StyledFooterLink>
              <StyledFooterLink to="/">Youtube</StyledFooterLink>
              <StyledFooterLink to="/">Twitter</StyledFooterLink>
              <StyledFooterLink to="/">LinkedIn</StyledFooterLink>
            </StyledFooterLinkItems>
          </StyledFooterLinks>
        </FooterLinksContainer>
        <SocialMediaContainer>
          <StyledSocialMedia>
            <SocialMediaLogoContainer to="/">
              DCisGlobal
            </SocialMediaLogoContainer>
            <WebsiteRights>
              DCisGlobal &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIconsContainer>
              <StyledSocialIconLink
                href=""
                target="_blank"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </StyledSocialIconLink>
              <StyledSocialIconLink
                href=""
                target="_blank"
                aria-label="Facebook"
              >
                <BsFacebook />
              </StyledSocialIconLink>
              <StyledSocialIconLink
                href=""
                target="_blank"
                aria-label="Youtube"
              >
                <BsYoutube />
              </StyledSocialIconLink>
              <StyledSocialIconLink
                href=""
                target="_blank"
                aria-label="Twitter"
              >
                <BsTwitter />
              </StyledSocialIconLink>
              <StyledSocialIconLink
                href=""
                target="_blank"
                aria-label="LinkedIn"
              >
                <BsLinkedin />
              </StyledSocialIconLink>
            </SocialIconsContainer>
          </StyledSocialMedia>
        </SocialMediaContainer>
      </StyledFooter>
    </FooterContainer>
  );
};

export default Footer;
