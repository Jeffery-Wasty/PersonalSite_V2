import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <img src={null} alt="logo" />
          <btn
            type="button"
            aria-label="Toggle button"
            className="toggle-btn"></btn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
