//import stlled components library
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  wrap: no-wrap;
  flex-direction: row;
  justify-content: end;
  align-content: flex-end;
  padding-bottom: 2vw;
`;

const Title = styled.h3`
  color: white;
  font-size: 1vw;
  font-family: Inter Light;
`;

const Link = styled.p`
  color: white;
  font-size: 1vw;
  font-family: Inter Light;
  opacity: 0.7;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 10vw;
  gap: 3%;
`;

const CreatorsText = () => {
  return (
    <TextContainer>
      <Column>
        <Title>Product</Title>
        <Link>Features</Link>
        <Link>Integrations</Link>
        <Link>Pricing</Link>
        <Link>Changelog</Link>
        <Link>Docs</Link>
        <Link>Linear Method</Link>
      </Column>
      <Column>
        <Title>Company</Title>
        <Link>About Us</Link>
        <Link>Blog</Link>
        <Link>Careers</Link>
        <Link>Customers</Link>
        <Link>Twitter</Link>
      </Column>
      <Column>
        <Title>Resources</Title>
        <Link>Community</Link>
        <Link>Contact</Link>
        <Link>DPA</Link>
        <Link>Terms of service</Link>
      </Column>
      <Column>
        <Title>Developers</Title>
        <Link>API</Link>
        <Link>Status</Link>
        <Link>GitHub</Link>
      </Column>
    </TextContainer>
  );
};

export default CreatorsText;
