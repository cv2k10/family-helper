import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class Pricing extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Pricing</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Pricing" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Pricing of Our Services</h2>
            <section className="content">
              <p>Out servicing price are transparent, calculated based on per-trip basis.</p>
              <p>We offer three categories of pricing.</p>
              <ul>
                <li>Three hours of companionship service: Rm150.00</li>
                <li>Four hours of companionship service: Rm175.00</li>
                <li>Five hours of companionship service: Rm195.00</li>
              </ul>
              <p>Each booking service only include one pick up and one location visit. Extra charge for additional time and location visit.</p>
              <ul>
                <li>Additional: one hour charge: Rm35.00</li>
                <li>Additional: two hour charge: Rm60.00</li>
                <li>Additional: one location visit: Rm50.00</li>
                <li>Additional: onr hour and one location visit: Rm70.00</li>
              </ul>
              <p>Important: Book service must with payment done 7 days advance prior date service.</p>
              <ul>
                <li>Company bank account: 6677651328</li>
                <li>Email or Whatsapp bank slip to us.</li>
              </ul>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default Pricing; 