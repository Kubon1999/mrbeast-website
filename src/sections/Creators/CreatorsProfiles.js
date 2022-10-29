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
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5vw;
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

  const [profileImagesPathsState, setProfileImagesPathsState] = useState();

  useEffect(() => {
    let rows = 4;
    let columns = 22;

    function myFunction(x) {
      if (x.matches) {
        // If media query matches - mobile view
        rows = 4;
        columns = 9;
      }
    }

    var x = window.matchMedia("(max-width: 768px)");
    myFunction(x); // Call listener function at run time

    let temp = [];
    for (let i = 0; i < rows; i++) {
      for (let i = 0; i < columns; i++) {
        let randomNumber = Math.floor(Math.random() * profileImages.length);
        let randomImage = profileImages[randomNumber];
        temp.push(randomImage);
        setProfileImagesPathsState(temp);
      }
    }
  }, []);

  return (
    <CreatorsContainer>
      {profileImagesPathsState
        ? profileImagesPathsState.map((profilePicture, key) => {
            var randomNumber2 = Math.random() * 1000;

            return <CreatorProfile img={profilePicture} key={key} id={key} />;
          })
        : null}
      {/* {profileImages.map((profilePicture, key) => (
        <CreatorProfile img={profilePicture} key={key} />
      ))} */}
    </CreatorsContainer>
  );
};

export default CreatorsProfiles;
