import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
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
          <div className="container">
            <HeaderWithBg title="What Is Family Helper" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Companion Works Services</h2>
            <section className="content">
              <p>We provide companion works for seniors to carry out their daily living task activities.</p>
              <p>Our term members, will ensure your senior feel happy, energetic and reduce their fear of loneliness or depression.  We are not a healthcare provider but merely providing services of accompanying assitent and without include any medical consultation in our services.</p>
              <p>A platform provides companion assistance work for seniors like doctor appointment, acupuncture, rehabilitation treatment, dialyse treatment, grocery shopping, relative visit, city tour, message centre, garden or lake walk, religion or charity activities and more.</p>
              <p>Our companion people will accompany you or your loved one to destination, wait until appointment finished and send you back home.</p>

              <ul>
                <li>Doctor Appointment</li>
                <li>Relative Visit</li>
                <li>City Tour</li>
                <li>Crocery Shopping or Lake Walk</li>
                <li>Dtlysis Center</li>
                <li>Masssage Center</li>
                <li>Read more..</li>
              </ul>
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

export default WhatIsFamilyHelper; 