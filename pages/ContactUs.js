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
              <p>Office phone: <a href="tel:603926778753">603-92677 8753</a></p>
              <p>Mobile: <a href="tel:60192791168">6019-279 1168</a></p>

              <p>Monday To Saturday: 9am - 6pm<br/>Sunday and Public holiday: 11am - 3am</p>

              <p>Our FAQ will give you fast and accurate info and answer, refer it now.</p>
            </section>

            <section className="enquiry section">
              <div className="form-title">Contact Form</div>
              <form className="enq-form" onSubmit={e => {
                e.preventDefault()
                // submitForm(e.target)
              }}>
                
                <input type="text" id="fullname" name="fullname" placeholder="Full name" required/>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="text" id="phone" name="phone" placeholder="Phone number" required/>
                <textarea id="message" name="message" placeholder="Message" required></textarea>
                <input type="submit" value="Send" />
              </form>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default ContactUs; 