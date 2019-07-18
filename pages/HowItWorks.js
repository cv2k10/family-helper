import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>How It Works</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Excellent Companionship Services" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Ensure you live independently and happily</h2>
            <section className="content">
              <p>Our companionship service ensure you or your loved one can live indepandantly, happily and securily.</p>              
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default HowItWorks; 