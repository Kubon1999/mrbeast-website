import styled from "styled-components";
import { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";

const CreatorImage = styled.img`
  alt: "yt-creator";
  width: 4vw;
  margin: 0.5vw;
  border-radius: 50%;
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
