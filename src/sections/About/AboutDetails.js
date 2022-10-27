import styled from "styled-components";
import two_stripes_blue_pink from "../../img/two-stripes-blue-pink.svg";

//Stripes from left counted 1.. 2 .. 3 .. 4
const Two_stripes_blue_pink_1 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: -10%;
  top: 35%;
  width: 20vw;

  animation: moveRight 20s linear infinite;

  @keyframes moveRight {
    0% {
      left: -10%;
    }

    100% {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 30vw;
    top: 45%;
    animation: moveRight 20s linear infinite;
  }
`;

Two_stripes_blue_pink_1.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_2 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: -10%;
  top: 20%;
  width: 10vw;
  transform: rotate(180deg);
  transform: scale(1, -1);

  animation: moveRight 7s linear infinite;

  @keyframes moveRight {
    0% {
      left: -100%;
    }

    100% {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 70vw;
    animation: moveRight 30s linear infinite;
  }
`;

Two_stripes_blue_pink_2.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_3 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  right: 0%;
  display:none;
  top: 25%;
  width: 17vw;
  transform: rotate(180deg);
  transform: scale(1, -1);

  animation: moveLeft 5s linear infinite;

  @keyframes moveLeft {
    0% {
      transform: right:0%;
    }

    100% {
      transform: right:100%;
    }
  }

`;

Two_stripes_blue_pink_3.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_4 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  right: -60%;
  top: 63%;
  width: 50vw;
  transform: rotate(180deg);
  animation: moveLeft 70s linear infinite;

  @keyframes moveLeft {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-400%);
    }
  }
`;

Two_stripes_blue_pink_4.defaultProps = {
  src: two_stripes_blue_pink,
};

const AboutDetails = () => {
  return (
    <>
      <Two_stripes_blue_pink_1 />
      <Two_stripes_blue_pink_2 />
      <Two_stripes_blue_pink_3 />
      <Two_stripes_blue_pink_4 />
    </>
  );
};

export default AboutDetails;
