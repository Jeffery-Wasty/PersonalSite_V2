import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <p>HELLO WORLD</p>
      <Jobs />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
