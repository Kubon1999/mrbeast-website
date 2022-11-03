//import stlled components library
import styled from "styled-components";
import CreatorsText from "./CreatorsText";
import CreatorsDetails from "./CreatorsDetails";
import CreatorsProfiles from "./CreatorsProfiles";

const CreatorsDiv = styled.div`
  text-align: center;
  height: 40vw;
  position: relative;

  @media (max-width: 768px) {
    height: 80vw;
  }
`;

const About = () => {
  return (
    <>
      <CreatorsDiv id="creators-section">
        <CreatorsText></CreatorsText>
        <CreatorsDetails></CreatorsDetails>
        <CreatorsProfiles></CreatorsProfiles>
      </CreatorsDiv>
    </>
  );
};

export default About;
