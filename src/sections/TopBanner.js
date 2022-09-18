//import stlled components library
import styled from "styled-components";
import { keyframes } from "styled-components";
import mrbeast_logo_panther from "../img/mrbeast-logo-panther.png";
import mrbeast_text_blue_big from "../img/mrbeast-text-big.svg";
import pink_background_with_thunder from "../img/pink-bg-with-thunder.png";
import TopBannerDetails from "./TopBannerDetails";

const MrBeastLogoPanther = styled.img`
  alt: "mrbeast-logo-panther";
  position: absolute;
  z-index: 10;
  left: 13.5%;
  top: 20%;
  width: 35vw;
  transform: rotate(-4.2deg);
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
`;

MrBeastTextBigBlue.defaultProps = {
  src: mrbeast_text_blue_big,
};

/* animation for background */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const PinkBackgroundWithThunder = styled.div`
  height: 30vw;
  background-size: cover;
  background-image: url(${pink_background_with_thunder});
`;

const TopBanner = () => {
  return (
    <>
      <section className="top-section relative">
        {/* we need to clip the mrbeast and pink thunder background behind the white foreground */}
        <div className="clip-this relative">
          <PinkBackgroundWithThunder></PinkBackgroundWithThunder>
          <MrBeastTextBigBlue />
        </div>
        <MrBeastLogoPanther />
        <TopBannerDetails />
      </section>
    </>
  );
};

export default TopBanner;
