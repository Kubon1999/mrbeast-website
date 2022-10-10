import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";

const StyledNavBar = styled.ul`
  margin: 1.5vw;
  display: flex;
  justify-content: flex-end;
  gap: 50%;
  list-style: none;
`;

const StyledNavBarElement = styled.li`
  font-size: 1vw;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const PageNavbar = () => {
  return (
    <div className="absolute z-10 right-0 text-white">
      <StyledNavBar>
        <StyledNavBarElement>Videos</StyledNavBarElement>
        <StyledNavBarElement>About</StyledNavBarElement>
        <StyledNavBarElement>Creators</StyledNavBarElement>
        <StyledNavBarElement>Contact</StyledNavBarElement>
      </StyledNavBar>
    </div>
  );
};

export default PageNavbar;
