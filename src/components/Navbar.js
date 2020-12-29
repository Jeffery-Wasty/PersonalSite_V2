import React from 'react';
import styled from 'styled-components';

const NavbarMain = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  // background: var(--clr-white);
`;

const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
`;

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToggleBtn = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  /* color: var(--clr-primary-5); */
  cursor: pointer;
  /* transition: var(--transition); */
`;

const Navbar = () => {
  return (
    <NavbarMain>
      <NavCenter>
        <NavHeader>
          {/* <img src={logo} alt="logo" /> */}
          <ToggleBtn
            type="button"
            aria-label="Toggle button"
            className="toggle-btn"></ToggleBtn>
        </NavHeader>
      </NavCenter>
    </NavbarMain>
  );
};

export default Navbar;

// /*
// ===============
// Navbar
// ===============
// */

//   .nav-header img {
//     margin-bottom: 0.375rem;
//   }

//   .toggle-btn:hover {
//     color: var(--clr-primary-2);
//   }
//   .nav-links {
//     display: none;
//   }
//   @media screen and (min-width: 768px) {
//     .toggle-btn {
//       display: none;
//     }
//     .nav-links {
//       display: flex;
//       justify-content: flex-end;
//     }
//     .nav-links li {
//       margin-right: 2rem;
//     }
//     .nav-links a {
//       text-transform: capitalize;
//       color: var(--clr-grey-1);
//       font-weight: bold;
//       letter-spacing: var(--spacing);
//       transition: var(--transition);
//       padding: 0.5rem 0;
//     }
//     .nav-links a:hover {
//       color: var(--clr-primary-5);
//       box-shadow: 0px 2px var(--clr-primary-5);
//     }
//     .nav-center {
//       display: grid;
//       grid-template-columns: auto 1fr;
//       align-items: center;
//     }
//   }

//   @media screen and (min-width: 992px) {
//     .navbar {
//       background: transparent;
//     }
//   }
//   /*
