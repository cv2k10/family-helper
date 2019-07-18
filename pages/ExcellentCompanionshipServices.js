import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";

class ExcellentCompanionshipServices extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Excellent Companionship Services</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Excellent Companionship Services" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Match our services with your needs</h2>
            <section className="content">
              <p>We offered this championship services enable you can carry out normal daily tasks, while member of families can focus thir tied rotate works.</p>
              <p>Services offered:</p>
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

export default ExcellentCompanionshipServices; 