import React from 'react';
import styled from 'styled-components';

const HeroMain = styled.header`
  height: 60vh;
  position: relative;

  @media screen and (min-width: 992px) {
    h4 {
      font-size: 0.85rem;
    }

    ::before {
      background: var(--clr-white);
    }

    @media screen and (min-width: 1170px) {
      h4 {
        font-size: 1rem;
        line-height: 1;
      }
    }
  }

  .btn {
    margin-top: 1.25rem;
  }
`;

const HeroCenter = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 0 auto;
`;

const HeroInfo = styled.article`
  margin: 0 auto;
  padding: 2rem;
  h4 {
    margin: 0 auto;
    max-width: 50%;
  }
`;

const Hero = () => {
  return (
    <HeroMain>
      <HeroCenter>
        <HeroInfo>
          <h1>Hi! My name is Jeff.</h1>
          <h4>
            I'm a software developer located in Vancouver. I build and design
            sleek, modern, and useful applications for the web.
          </h4>
        </HeroInfo>
      </HeroCenter>
    </HeroMain>
  );
};

export default Hero;
