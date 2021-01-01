import * as React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Jobs from '../components/Jobs';
import Projects from '../components/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Jobs />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
