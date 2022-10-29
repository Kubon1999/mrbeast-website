import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { HashLink } from "react-router-hash-link";

const StyledNavBar = styled.ul`
  margin: 1.5vw;
  margin-right: 5vw;
  display: flex;
  justify-content: flex-end;
  gap: 8vw;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
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
    <>
      <Menu className="mobile-burger">
        <a id="home" className="menu-item" href="/">
          Videos
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Creators
        </a>
        <a className="menu-item--small" href="">
          Contact
        </a>
      </Menu>
      <div className="absolute z-10 right-0 text-white">
        <StyledNavBar>
          <StyledNavBarElement>
            <a href="#about">Videos</a>
          </StyledNavBarElement>
          <StyledNavBarElement>About</StyledNavBarElement>
          <StyledNavBarElement>Creators</StyledNavBarElement>
          <StyledNavBarElement>
            <a href="#contact">Contact</a>
          </StyledNavBarElement>
        </StyledNavBar>
      </div>
    </>
  );
};

export default PageNavbar;
