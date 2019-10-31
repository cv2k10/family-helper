import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
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
              <p>Let our teams take care you or your senior. Our companion persons are well trained. They are patient,compassionate and professional  assigned to handle this work. You senior will feel happy,energetic  ,minimized their mind of loneliness or depression.</p>
              <p>Our companion person pick you at home, drives to destination, wait until appointment finished and send you back home.</p>
              <p>Juggling your work schedule and fulfill senior needs are not easy. Our companion person can helps you.</p>              
            
              <Link href="./OrderForm">
                <div className="btn-full">
                  <a>Order Our Services Now</a>
                </div>
              </Link>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default HowWeHelpYou; 