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

  /* for mobile */
  @media (max-width: 768px) {
    top: 32%;
    transform: scale(2) rotate(193deg);
  }
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

  /* for mobile */
  @media (max-width: 768px) {
    top: 47%;
    transform: scale(2) rotate(193deg);
  }
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
    top: 55%;
    transform: scale(1) rotate(193deg);
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
    display: none;
  }
`;

const Two_stripes_blue_pink_mobile = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 10;
  left: -10%;
  top: 4%;
  transform: scale(2.5) rotate(13deg);

  /* for desktop */
  @media (min-width: 769px) {
    display: none;
  }
`;

Two_stripes_blue_pink_mobile.defaultProps = {
  src: two_stripes_blue_pink,
};

const Main_page_text_mobile = styled.h1`
  alt: "YOU CANT LOSE IF YOU BREAK THE PRIZE!";
  position: absolute;
  z-index: 11;
  left: 2%;
  top: 13%;
  width: 100vw;
  transform: rotate(14deg);

  font-family: "Inter Extra Bold";
  font-size: 8.2vw;
  color: #ffffff;

  text-shadow: 0.3vw 0.4vw 0px #ff5790;

  /* for desktop */
  @media (min-width: 769px) {
    display: none;
  }
`;

const Div_for_overflow = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
  margin-top: -95px;

  /* for desktop */
  @media (min-width: 769px) {
    display: none;
  }
`;

const TopBannerDetails = () => {
  return (
    <div>
      <Two_stripes_blue_pink_left />
      <Two_stripes_blue_pink_center />

      <Main_page_text>"YOU CAN'T LOSE IF YOU BREAK THE PRIZE!"</Main_page_text>
      <Div_for_overflow>
        <Main_page_text_mobile>
          "YOU CAN'T LOSE IF YOU BREAK THE PRIZE!"
        </Main_page_text_mobile>
        <Two_stripes_blue_pink_mobile />
      </Div_for_overflow>
      <Two_stripes_blue_pink_right />
    </div>
  );
};

export default TopBannerDetails;
