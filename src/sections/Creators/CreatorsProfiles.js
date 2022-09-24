import styled from "styled-components";
import bella from "../../img/creators/bella.jpeg";
import jaiden from "../../img/creators/jaiden.jpeg";
import larray from "../../img/creators/larray.jpeg";
import lauren from "../../img/creators/lauren.jpeg";
import mark from "../../img/creators/mark.jpeg";
import matt from "../../img/creators/matt.jpeg";
import quackity from "../../img/creators/quackity.jpeg";
import rae from "../../img/creators/rae.jpeg";
import rossana from "../../img/creators/rossana.jpeg";
import wow from "../../img/creators/wow.jpeg";
import black from "../../img/creators/black.jpeg";
import logan from "../../img/creators/logan.jpeg";
import mkbhd from "../../img/creators/mkbhd.jpeg";
import zhc from "../../img/creators/zhc.jpeg";
import CreatorProfile from "./CreatorProfile";
import { useEffect, useState } from "react";

const CreatorsContainer = styled.div`
  margin-top: 8vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0%;
  justify-content: center;
`;

const CreatorsProfiles = () => {
  const profileImages = [
    mkbhd,
    bella,
    rossana,
    black,
    jaiden,
    larray,
    lauren,
    logan,
    mark,
    matt,
    quackity,
    rae,
    wow,
    zhc,
  ];

  const profileImagesPaths = [
    "/img/creators/bella.jpeg",
    "/img/creators/jaiden.jpeg",
    "/img/creators/larray.jpeg",
    "/img/creators/lauren.jpeg",
    "/img/creators/mark.jpeg",
    "/img/creators/matt.jpeg",
    "/img/creators/quackity.jpeg",
    "/img/creators/rae.jpeg",
    "/img/creators/rossana.jpeg",
    "/img/creators/wow.jpeg",
    "/img/creators/black.jpeg",
    "/img/creators/logan.jpeg",
    "/img/creators/mkbhd.jpeg",
    "/img/creators/zhc.jpeg",
  ];

  const rows = 4;
  const columns = 20;

  const [profileImagesPathsState, setProfileImagesPathsState] = useState();

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < rows; i++) {
      for (let i = 0; i < columns; i++) {
        let randomNumber = Math.floor(Math.random() * profileImages.length);
        let randomImage = profileImagesPaths[randomNumber];
        temp.push(randomImage);
        setProfileImagesPathsState(temp);
      }
    }
  }, []);

  return (
    <CreatorsContainer>
      {profileImagesPathsState
        ? profileImagesPathsState.map((profilePicture, key) => (
            <CreatorProfile img={profilePicture} key={key} />
          ))
        : null}
    </CreatorsContainer>
  );
};

export default CreatorsProfiles;
