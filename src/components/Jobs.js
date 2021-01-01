import React from 'react';
// import Title from './Title';
import styled from 'styled-components';
import { FaAngleDoubleRight } from 'react-icons/fa';
// import { Link } from 'gatsby';
import JobLinks from '../constants/Jobs';

const JobsCenter = styled.div`
  width: 80vw;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: var(--max-width);

  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 4rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const JobBtn = styled.button`
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  font-size: 1.25rem;
  letter-spacing: var(--spacing);
  margin: 0 0.5rem;
  transition: var(--transition);
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  outline: 0;

  :hover {
    color: var(--clr-primary-5);
    box-shadow: 0 2px var(--clr-primary-5);
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 1rem;

    :hover {
      box-shadow: -2px 0 var(--clr-primary-5);
    }
  }
`;

const JobsInfo = styled.article`
  h3 {
    font-weight: 400;
  }
  h4 {
    text-transform: uppercase;
    color: black;
    background: var(--clr-grey-9);
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: var(--radius);
  }
`;

const JobsDate = styled.p`
  letter-spacing: var(--spacing);
`;

const JobDesc = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 2rem;
  align-items: center;
  margin-bottom: 1.25rem;

  p {
    margin-bottom: 0;
  }
`;

const JobIcon = styled(FaAngleDoubleRight)`
  color: var(--clr-primary-5);
`;

const Jobs = () => {
  const [value, setValue] = React.useState(0);

  console.log(value);
  const { company, position, date, desc } = JobLinks[value];

  console.log(company);

  return (
    <section id="work" className="section">
      {/* <Title title="expierence" /> */}
      <JobsCenter>
        {/* btn container */}
        <BtnContainer>
          {JobLinks.map((item, index) => {
            return (
              <JobBtn
                key={item.id}
                onClick={() => setValue(index)}
                className={`${index === value && 'active-btn'}`}>
                {item.company}
              </JobBtn>
            );
          })}
        </BtnContainer>
        {/* job info */}
        <JobsInfo>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <JobsDate>{date}</JobsDate>
          {desc.map(item => {
            return (
              <JobDesc key={item.id}>
                <JobIcon></JobIcon>
                <p>{item.name}</p>
              </JobDesc>
            );
          })}
        </JobsInfo>
      </JobsCenter>
      {/* <Link to="/about" className="btn center-btn">
        more info
      </Link> */}
    </section>
  );
};

export default Jobs;
