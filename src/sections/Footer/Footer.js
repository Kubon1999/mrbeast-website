//import stlled components library
import styled from "styled-components";
import pink_background_with_thunder from "../../img/pink-bg-with-thunder.png";
import FooterText from "./FooterText";
import FooterLeft from "./FooterLeft";

const FooterDiv = styled.div`
  width: 100%;
  height: 30vw;
  clip-path: polygon(0 0, 100% 66%, 100% 100%, 0 100%);
  background-image: url(${pink_background_with_thunder});
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    height: 140vw;
    clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%);
    flex-direction: column;
    padding-top: 40vw;
    padding-left: 5vw;
    padding-right: 5vw;
    background-repeat: repeat;
    background-size: contain;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterDiv id="contact">
        <FooterLeft />
        <FooterText />
      </FooterDiv>
    </>
  );
};

export default Footer;
