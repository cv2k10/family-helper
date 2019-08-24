import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
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
              <p>we provides companionship works for seniors to carry out their daily living task activities.</p>
              <p>Our companion assistant services included market walk ,lake or morning walk,grocery shopping,dialyse treatment,relative visit,city tour,funeral house,acupuncture treatment,rehabilitation treatment,religious or charity events and more.</p>
              <p>A platform merely provides accompanying assistant works for seniors without include any medical consultation in our services. Our companion teams will ensured your senior feel happy,energetic  and reduce their fear of loneliness or depression . </p>
              <p>Our companion people pick you from home,send you to destination appointment ,send you back home after appointment finished.(-pick you from home- send you to grocery shopping-carry bag for you- drives you back home).</p>

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
        </Layout>

      </div>
    );
  }
}

export default WhatIsFamilyHelper; 