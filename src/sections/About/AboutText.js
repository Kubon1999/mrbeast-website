//import stlled components library
import styled from "styled-components";

const SmallText = styled.p`
  color: white;
  font-size: 1.3vw;
  font-family: Inter Light;

  @media (max-width: 768px) {
    font-size: 5vw;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 2.2vw;
  font-family: Inter Extra Bold;
  margin-top: 1vw;
  margin-bottom: 1vw;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;

const Description = styled.h2`
  color: white;
  font-size: 1.7vw;
  font-family: Inter Light;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DescriptionMobile = styled.h2`
  color: white;
  font-size: 1.7vw;
  font-family: Inter Light;

  @media (max-width: 768px) {
    font-size: 4vw;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

const TextBolded = styled.p`
  font-weight: bold;
`;

const TextHighlighted = styled.p`
  color: F0528D;
`;

const StyledDiv = styled.div`
  padding-left: 10vw;
  /* for mobile flex direction should be column-reverse so that the person is first */
  @media (max-width: 768px) {
    padding-left: 5vw;
  }
`;

const AboutText = () => {
  return (
    <StyledDiv>
      <SmallText> Who is he? </SmallText>
      <Header>
        {" "}
        Jimmy Donaldson<br></br> (born May 7, 1998),<br></br> better known as
        MrBeast,{" "}
      </Header>
      <Description>
        is an American YouTube personality, entrepreneur, <br></br> and
        philanthropist. He has been credited with <br></br>pioneering a genre of
        YouTube videos that centers on <br></br> expensive stunts. His main
        YouTube channel, <br></br>
        "MrBeast", is the fifth-most-subscribed on the platform.
      </Description>

      <DescriptionMobile>
        is an American YouTube personality, entrepreneur, and philanthropist. He
        has been credited with pioneering a genre of YouTube videos that centers
        on expensive stunts.<br></br> His main YouTube channel, "MrBeast",
        <br></br> is the fifth-most-subscribed on the platform.
      </DescriptionMobile>
    </StyledDiv>
  );
};

export default AboutText;
