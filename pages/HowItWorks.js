import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";

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

          <style jsx>{`
            .container {
              background: #fff;
            }

            .container h2 {
              font-family: 'Museo Sans Cyrl 300';
              font-size: 1.2em;
              text-align: center;
              color: #333;
              margin: 30px 0 20px;
            }

            .container .content {
              font-size: 1em;
              margin: 0 0 24px;
              padding: 0 20px;
              padding-bottom: 20px;
            }
          `}</style>
        </Layout>

      </div>
    );
  }
}

export default HowItWorks; 