import styled from "styled-components";
import two_stripes_blue_pink from "../../img/two-stripes-blue-pink.svg";

//Stripes from left counted 1.. 2 .. 3 .. 4
const Two_stripes_blue_pink_1 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: 4%;
  top: 35%;
  width: 20vw;
`;

Two_stripes_blue_pink_1.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_2 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: 20%;
  top: 20%;
  width: 10vw;
  transform: rotate(180deg);
  transform: scale(1, -1);
`;

Two_stripes_blue_pink_2.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_3 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: 40%;
  top: 25%;
  width: 17vw;
  transform: rotate(180deg);
  transform: scale(1, -1);
`;

Two_stripes_blue_pink_3.defaultProps = {
  src: two_stripes_blue_pink,
};

const Two_stripes_blue_pink_4 = styled.img`
  alt: "two-stripes-blue-pink";
  position: absolute;
  z-index: 5;
  left: 23%;
  top: 63%;
  width: 50vw;
  transform: rotate(180deg);
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
