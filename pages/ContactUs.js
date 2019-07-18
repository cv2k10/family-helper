import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class ContactUs extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Contact Us" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Any Enquiries</h2>
            <section className="content">
              <p>Forward your request or call us</p>
              <p>03-92677753</p>
              <p>019-2791168</p>

              <p>Monday To Saturday: 9am - 6pm<br/>Sunday and Public holiday: 11am - 3am</p>

              <p>Our FAQ will give you fast and accurate info and answer, refer it now.</p>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default ContactUs; 