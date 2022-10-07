import styled from "styled-components";

const CreatorImage = styled.img`
  alt: "yt-creator";
  width: 4vw;
  margin: 0.5vw;
  border-radius: 50%;
`;

const CreatorProfile = ({ img, id }) => {
  console.log(id);
  return (
    <CreatorImage src={img} style={{ "--i": id }} className="creator-profile" />
  );
};

export default CreatorProfile;
