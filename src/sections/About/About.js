//import stlled components library
import styled from "styled-components";
import AboutText from "./AboutText";
import mrbeast_profile from "../../img/mrbeast-profile.png";
import mrbeast_text_bg from "../../img/beast-text-bg.svg";

const AboutDiv = styled.div`
  height: 65vw;
  background-color: #44d6ff;
  clip-path: polygon(0 0, 100% 30%, 100% 100%, 0 77%);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20vw;
`;

const AboutImage = styled.img`
  position: relative;
  width: 38vw;
  padding-top: 10vw;
  z-index: 20;
`;

AboutImage.defaultProps = {
  src: mrbeast_profile,
};

const AboutImageBackground = styled.img`
  position: absolute;
  padding-top: 10vw;
  width: 38vw;
`;

AboutImageBackground.defaultProps = {
  src: mrbeast_text_bg,
};

const About = () => {
  return (
    <>
      <AboutDiv>
        <TextContainer>
          <AboutText></AboutText>
          <div class="relative">
            <AboutImageBackground></AboutImageBackground>
            <AboutImage></AboutImage>
          </div>
        </TextContainer>
      </AboutDiv>
    </>
  );
};

export default About;
