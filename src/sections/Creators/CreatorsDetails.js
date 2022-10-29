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

  @media (max-width: 768px) {
    transform: scaleY(2.1);
    top: 30%;
  }
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

  @media (max-width: 768px) {
    transform: scale(-1) scaleY(2.1);
    top: 30%;
  }
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

  @media (max-width: 768px) {
    left: -20%;
    width: 50vw;
  }
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

  @media (max-width: 768px) {
    width: 80vw;
    top: 10%;
    right: -20%;
  }
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

  @media (max-width: 768px) {
    width: 20vw;
    top: 52%;
    left: 40%;
  }
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
