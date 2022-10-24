//import stlled components library
import styled from "styled-components";
import { keyframes } from "styled-components";
import mrbeast_logo_panther from "../img/mrbeast-logo-panther.png";
import mrbeast_text_blue_big from "../img/mrbeast-text-big.svg";
import pink_background_with_thunder from "../img/pink-bg-with-thunder.png";
import pink_background_with_thunder_looped from "../img/pink-bg-with-thunder-looped.png";
import TopBannerDetails from "./TopBannerDetails";

const panther = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10rem);
        rotate(0deg);
    }

    100% {
        opacity: 1;
        transform: translate(0);
        transform: rotate(-4.2deg);
    }
`;

const MrBeastLogoPanther = styled.img`
  alt: "mrbeast-logo-panther";
  position: absolute;
  z-index: 10;
  left: 13.5%;
  top: 20%;
  width: 35vw;
  transform: rotate(-4.2deg);
  animation-name: ${panther};
  animation-duration: 2s;

  @media (max-width: 768px) {
    display: none;
  }
`;

MrBeastLogoPanther.defaultProps = {
  src: mrbeast_logo_panther,
};

const MrBeastTextBigBlue = styled.img`
  alt: "mrbeast-text-big-blue";
  width: 80%;
  position: absolute;
  bottom: -5%;
  right: 2%;
  transform: rotate(12deg);

  /* for mobile extend the pink thunder background to the ~1/3 of the height of the deivce */
  @media (max-width: 768px) {
    width: 100%;
    bottom: 3%;
    transform: rotate(14deg) scale(1.25);
  }
`;

MrBeastTextBigBlue.defaultProps = {
  src: mrbeast_text_blue_big,
};

const PinkBackgroundWithThunder = styled.div`
  height: 30vw;
  background-size: cover;
  background-image: url(${pink_background_with_thunder});
  visibility: hidden;

  /* for mobile extend the pink thunder background to the ~1/2 of the height of the deivce */
  @media (max-width: 768px) {
    height: 80vw;
  }
`;

/* animation for background */
const scroll = keyframes`
  100% { transform: translateY(20%); }
  
`;

const mobileScroll = keyframes`
  0%{
    transform: translateY(0) scale(2);
  }
  100% { 
    transform: translateY(20%) scale(2); 
  }
  
`;

const PinkBackgroundWithThunderAnimation = styled.img`
  alt: "animated pink thunder background going from top to bottom";
  width: 100%;
  position: absolute;
  margin: 0;
  top: -100%;
  animation-name: ${scroll};
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  /* turn off the animation  */
  @media (max-width: 768px) {
    animation-name: ${mobileScroll};
    top: -15%;
  }
`;

PinkBackgroundWithThunderAnimation.defaultProps = {
  src: pink_background_with_thunder_looped,
};

const TopBanner = () => {
  return (
    <>
      <section className="top-section relative">
        {/* we need to clip the mrbeast and pink thunder background behind the white foreground */}
        <div className="clip-this relative">
          <PinkBackgroundWithThunder></PinkBackgroundWithThunder>
          <PinkBackgroundWithThunderAnimation></PinkBackgroundWithThunderAnimation>
          <MrBeastTextBigBlue />
        </div>
        <MrBeastLogoPanther />
        <TopBannerDetails />
      </section>
    </>
  );
};

export default TopBanner;
