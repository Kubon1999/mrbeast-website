import styled from "styled-components";

const CreatorImage = styled.img`
  alt: "yt-creator";
  width: 4vw;
  margin: 0.5vw;
  border-radius: 50%;

  animation: fadeIn 1s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const CreatorProfile = ({ img }) => {
  return <CreatorImage src={img} />;
};

export default CreatorProfile;
