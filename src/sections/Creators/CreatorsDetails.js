import styled from "styled-components";
import two_stripes_blue_pink from "../../img/two-stripes-blue-pink.svg";
import two_stripes_from_right_to_center from "../../img/stripes-from-right-to-center.svg";
import fade_out_left from "../../img/fade-out-left.png";
import yt_button from "../../img/yt-button.png";
import { Fade } from "react-bootstrap";

const Fade_out_left = styled.img`
  alt: "faded out white background";
  position: absolute;
  z-index: 2;
  left: 0%;
  top: 6%;
  width: 50vw;
`;

Fade_out_left.defaultProps = {
  src: fade_out_left,
};

const Fade_out_right = styled.img`
  alt: "faded out white background";
  position: absolute;
  z-index: 2;
  right: 0%;
  top: 6%;
  width: 50vw;
  transform: scale(-1);
`;

Fade_out_right.defaultProps = {
  src: fade_out_left,
};

const Two_stripes_blue_pink_1 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: -10%;
  bottom: 0%;
  width: 25vw;
  transform: rotate(20deg);
`;

Two_stripes_blue_pink_1.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_from_right_to_center = styled.img`
  alt: "two-stripes-from-right-to-center";
  position: absolute;
  z-index: 2;
  right: 0%;
  top: 0%;
  width: 55vw;
  transform: scaleX(1);
`;

Two_stripes_from_right_to_center.defaultProps = {
  src: two_stripes_from_right_to_center,
};

const Yt_button = styled.img`
  alt: "youtube logo";
  position: absolute;
  z-index: 20;
  left: 47%;
  top: 45%;
  width: 10vw;
`;

Yt_button.defaultProps = {
  src: yt_button,
};

const CreatorsDetails = () => {
  return (
    <>
      <Fade_out_left />
      <Fade_out_right />
      <Two_stripes_blue_pink_1 />
      <Two_stripes_from_right_to_center />
      <Yt_button />
    </>
  );
};

export default CreatorsDetails;
