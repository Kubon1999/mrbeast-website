//import stlled components library
import styled from "styled-components";

const Header = styled.h1`
  color: black;
  font-size: 2.2vw;
  font-family: Inter Extra Bold;
  display: inline-block;
  /* parent div text-align center + this code = center aligned text but staring from left */
  text-align: left;
  position: relative;
  z-index: 11;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;

const TextHighlighted = styled.h1`
  font-family: "Inter Extra Bold";
  font-size: 3vw;
  color: #ffffff;
  text-shadow: 0.3vw 0.4vw 0px #00bce7;

  z-index: 11;
  position: absolute;
  bottom: 0%;
  right: -12%;

  @media (max-width: 768px) {
    font-size: 7vw;
    right: 7%;
  }
`;

const CreatorsText = () => {
  return (
    <>
      <Header>
        Collaborated with the <br></br> &nbsp; biggest
        <TextHighlighted>CREATORS</TextHighlighted>
      </Header>
    </>
  );
};

export default CreatorsText;
