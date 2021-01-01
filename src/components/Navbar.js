import React from 'react';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'gatsby';

const NavbarMain = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;

  @media screen and (min-width: 992px) {
    background: transparent;
  }
`;

const NavCenter = styled.nav`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  float: right;

  img {
    margin-bottom: 0.375rem;
  }
`;

const ToggleBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: white;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;

    li {
      margin-right: 2rem;
    }

    a {
      text-transform: capitalize;
      color: white;
      font-weight: bold;
      letter-spacing: var(--spacing);
      transition: var(--transition);
      padding: 0.5rem 0;
    }

    a:hover {
      color: var(--clr-primary-5);
    }
  }
`;

const Navbar = ({ toggleSidebar }) => {
  return (
    <NavbarMain>
      <NavCenter>
        <NavHeader>
          <ToggleBtn type="button" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </ToggleBtn>
        </NavHeader>
        <NavLinks>
          <li key="1">
            <Link to="/#about">About</Link>
          </li>
          <li key="2">
            <Link to="/#work">Work</Link>
          </li>
          <li key="3">
            <Link to="/#projects">Projects</Link>
          </li>
        </NavLinks>
      </NavCenter>
    </NavbarMain>
  );
};

export default Navbar;
