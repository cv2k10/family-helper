import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class WhyFamilyHelper extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Why Family Helper</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Why Family Helper" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Customer First Policy</h2>
            <section className="content">
              <p>Customer expectation and satisfaction are our company priority mission, We welcome and serious about the feedback and comments from you. Any issue dispute between you and our company, we will resolved it amicablely to accommodate you need.</p>
            </section>
            
          <h2>Transparent pricing</h2>
            <section className="content">
            <p>Our service price are transparent and based on per-trip basis. This fee are included transportation, salary companion people, time service and location visit. The service price stated is exactly payment amount, no extra cost unless additional time or visit location requested.</p>
            </section> 

          <h2>Safety and Security</h2>
            <section className="content">
            <p>Our companionship work will carry out with safely, securely and professionally. This companion people are through stringent process selection like back ground check,personal interview, driving behavior test,car inspection, driving lessen and car insurance validity. You are safe and secured with our  companion care services.</p>
            </section> 

          <h2>Save Time, Efficient and Reliable</h2>
            <section className="content">
            <p>Our companion people will wait you in front your house on day of appointment(15 minutes waiting time). Prior a day of appointment, our staff will call and remind you this important appointment. Our companion people make sure missing seniors will not happened.</p>
            </section> 
            
          </div>
        </Layout>

      </div>
    );
  }
}

export default WhyFamilyHelper; 