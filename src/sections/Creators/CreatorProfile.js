import styled from "styled-components";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const CreatorImage = styled.img`
  alt: "yt-creator";
  width: 3.4vw;
  margin: 0.5vw;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 10vw;
  }
`;

const CreatorProfile = ({ img, id }) => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    console.log("waypoint triggered");
  }, [appear]);

  return (
    <>
      {appear && (
        <CreatorImage
          src={img}
          alt="yt-creator"
          className="creator-profile"
          style={{ "--i": id }}
        />
      )}
      <Waypoint onEnter={() => setAppear(true)} />
    </>
  );
};

export default CreatorProfile;
