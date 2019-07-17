import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";

class WhatIsFamilyHelper extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>What Is Family Helper</title>
        </Head>
        <Layout>
          <p>What is Family Helper</p>
        </Layout>
      </div>
    );
  }
}

export default WhatIsFamilyHelper; 