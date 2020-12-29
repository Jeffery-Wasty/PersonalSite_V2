import React from 'react';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header>
      <div>
        <article>
          <div>
            <div></div>
            <h1>Hello world!</h1>
            <h4>This is my website</h4>
          </div>
        </article>
        {/* <Image fluid={fluid} /> */}
      </div>
    </header>
  );
};

export default Hero;
