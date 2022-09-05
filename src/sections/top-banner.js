//import stlled components library
import styled from "styled-components";
import mrbeast_logo_panther from "../img/mrbeast-logo-panther.png";
import mrbeast_text_blue_big from "../img/mrbeast-text-big.svg";
import pink_background_with_thunder from "../img/pink-bg-with-thunder.png";

const MrBeastLogoPanther = styled.img`
  alt: "mrbeast-logo-panther";
  position: absolute;
  z-index: 10;
  left: 9%;
  top: 9%;
  width: 50vw;
  transform: rotate(-3.1deg);
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

const PinkBackgroundWithThunder = styled.div`
  height: 30vw;
  background-size: cover;
  background-image: url(${pink_background_with_thunder});
`;

const TopBanner = () => {
  return (
    <section className="top-section relative">
      <div className="clip-this relative">
        <PinkBackgroundWithThunder></PinkBackgroundWithThunder>
        <MrBeastTextBigBlue />
      </div>
      <MrBeastLogoPanther />

      {/* <ul className="flex flex-row gap-20 justify-end text-white p-5 pr-20">
          <li>Videos</li>
          <li>About</li>
          <li>Creators</li>
          <li>Contact</li>
        </ul> */}
    </section>
  );
};

export default TopBanner;
