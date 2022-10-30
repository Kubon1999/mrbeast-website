//import stlled components library
import styled from "styled-components";
import pink_background_with_thunder from "../../img/pink-bg-with-thunder.png";
import slack from "../../img/slack.svg";
import github from "../../img/github.svg";
import twitter from "../../img/twitter.svg";
import FooterText from "./FooterText";
import profile_photo from "../../img/profile-photo.png";
const FooterLeftContainer = styled.div`
  flex-basis: 1/4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 22%;
  padding-bottom: 2vw;
`;

const FooterProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5%;
`;

const FooterProfilePhoto = styled.img`
  width: 7vw;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 20vw;
  }
`;

FooterProfilePhoto.defaultProps = {
  src: profile_photo,
};

const FooterIcon = styled.img`
  width: 3.2vw;

  @media (max-width: 768px) {
    width: 7vw;
  }
`;

const FooterLeftText = styled.p`
  color: white;
  font-family: "Inter Light";
  font-size: 1vw;

  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;

const Footer = () => {
  return (
    <FooterLeftContainer>
      <FooterProfileContainer>
        <FooterProfilePhoto />
        <FooterLeftText>
          Website created by Hansu, for the purpose of this video.<br></br>It is
          not assosiated with MrBeast Company -<br></br> page created as a
          fanpage.
        </FooterLeftText>
      </FooterProfileContainer>
      <FooterProfileContainer>
        <FooterIcon src={slack} />
        <FooterIcon src={github} />
        <FooterIcon src={twitter} />
      </FooterProfileContainer>
    </FooterLeftContainer>
  );
};

export default Footer;
