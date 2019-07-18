import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";

class HowWeHelpYou extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>How We Help You</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="How We Help You" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Family Care Giver</h2>
            <section className="content">
              <p>We understand your problem, it is not easy juggling your working schedule with senior needs. Our goal is to reduce your burden and stress associated being a family caregiver.</p>
              <p>Let our teams take care you or your senior. Our companion persons are well trained. They are patient, compassionate and professional assigned to handle this work. Stringent recruitment process like personal interviewed, background check, vehicle inspection and validity driving lesson, car insurance, ensued you are safe and secured.</p>
              <p>Our companion person pick you at home, drives to destination, wait until appointment finished and send you back home.</p>
              <p></p>              
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

export default HowWeHelpYou; 