import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { bubble as Menu } from "react-burger-menu";
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
        <a
          id="videos"
          className="menu-item"
          href="https://www.youtube.com/user/MrBeast6000"
        >
          Videos
        </a>
        <a id="about" className="menu-item" href="#about-section">
          About
        </a>
        <a id="creators" className="menu-item" href="#creators-section">
          Creators
        </a>
        <a className="menu-item--small" href="https://www.mrbeastjobs.com/">
          Jobs
        </a>
      </Menu>
      <div className="absolute z-10 right-0 text-white">
        <StyledNavBar>
          <StyledNavBarElement>
            <a href="https://www.youtube.com/user/MrBeast6000">Videos</a>
          </StyledNavBarElement>
          <StyledNavBarElement>
            <a href="#about-section">About</a>
          </StyledNavBarElement>
          <StyledNavBarElement>
            <a href="#creators-section">Creators</a>
          </StyledNavBarElement>
          <StyledNavBarElement>
            <a href="https://www.mrbeastjobs.com/">Jobs</a>
          </StyledNavBarElement>
        </StyledNavBar>
      </div>
    </>
  );
};

export default PageNavbar;
