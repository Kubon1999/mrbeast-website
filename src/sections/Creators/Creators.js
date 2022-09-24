//import stlled components library
import styled from "styled-components";
import CreatorsText from "./CreatorsText";
import CreatorsDetails from "./CreatorsDetails";
import CreatorsProfiles from "./CreatorsProfiles";

const CreatorsDiv = styled.div`
  text-align: center;
  height: 105vw;
  position: relative;
`;

const About = () => {
  return (
    <>
      <CreatorsDiv>
        <CreatorsText></CreatorsText>
        <CreatorsDetails></CreatorsDetails>
        <CreatorsProfiles></CreatorsProfiles>
      </CreatorsDiv>
    </>
  );
};

export default About;
