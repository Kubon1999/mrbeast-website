//import stlled components library
import styled from "styled-components";
import two_stripes_blue_pink from "../img/two-stripes-blue-pink.svg";

const Two_stripes_blue_pink_left = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 9;
  left: -10%;
  top: 20%;
  width: 20vw;
  transform: rotate(192deg);
`;

Two_stripes_blue_pink_left.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_right = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 9;
  right: 1%;
  top: 84.5%;
  width: 15vw;
  transform: rotate(192deg);
`;

Two_stripes_blue_pink_right.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_center = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 9;
  right: 11%;
  top: 23%;
  width: 67vw;
  transform: rotate(12deg);

  /* for mobile */
  @media (max-width: 768px) {
    top: 85%;
    left: 2%;
    width: 100vw;
    transform: scale(2.5) rotate(8deg);
  }
`;

Two_stripes_blue_pink_center.defaultProps = {
  src: two_stripes_blue_pink,
};

const Main_page_text = styled.h1`
  alt: "YOU CANT LOSE IF YOU BREAK THE PRIZE!";
  position: absolute;
  z-index: 11;
  right: 10%;
  top: 70%;
  width: 50vw;
  transform: rotate(12deg);

  font-family: "Inter Extra Bold";
  font-size: 3vw;
  color: #ffffff;

  text-shadow: 0.3vw 0.4vw 0px #ff5790;

  /* for mobile */
  @media (max-width: 768px) {
    font-size: 9vw;
    top: 95%;
    left: 2%;
    width: 100vw;
  }

  @media (max-width: 320px) {
    top: 70%;
    transform: rotate(15deg);
  }

  @media (min-width: 321px) and (max-width: 559px) {
    transform: rotate(8deg);
  }

  @media (min-width: 560px) {
    transform: rotate(11deg);
  }
`;

const TopBannerDetails = () => {
  return (
    <>
      <Two_stripes_blue_pink_left />
      <Two_stripes_blue_pink_center />
      <Main_page_text>"YOU CAN'T LOSE IF YOU BREAK THE PRIZE!"</Main_page_text>
      <Two_stripes_blue_pink_right />
    </>
  );
};

export default TopBannerDetails;
