import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

const HowWeHelpYou = props => {
    return (
      <div>
        <Head>
          <title>How We Help You</title>
        </Head>
        <Layout pageProps={props}>
          <div className="container">
            <HeaderWithBg title="How We Help You" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Family Care Giver</h2>
            <section className="content">
              {/* <p>We understand your problem, it is not easy juggling your working schedule with senior needs. Our goal is to reduce your burden and stress associated being a family caregiver.</p>
              <p>Let our teams take care you or your senior. Our companion persons are well trained. They are patient,compassionate and professional  assigned to handle this work. You senior will feel happy,energetic  ,minimized their mind of loneliness or depression.</p>
              <p>Our companion person pick you at home, drives to destination, wait until appointment finished and send you back home.</p>
              <p>Juggling your work schedule and fulfill senior needs are not easy. Our companion person can helps you.</p>   */}

              <p>We understanding your problem, it's difficult  juggling your working schedule with senior need. Our goal is reduce your burden and stress associated being a family caregiver.</p><p>Many aging senior still can live independently but occasionally need assistant like doing grocery shopping, doctor appointment, run errands, relative visit and more.</p><p>We solved your problem by providing this senior companionship to help senior doing shopping with carry plastic bag, sit with senior in doctor room, doing run errands like paying bill, pharmacy, prescription and more.</p><p>We pick senior from home, drives senior for appointment, accompany senior till appointment finished, send senior back home.</p>            
            
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

export default HowWeHelpYou; 