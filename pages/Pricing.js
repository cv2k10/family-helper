import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

const Pricing = props => {
    return (
      <div>
        <Head>
          <title>Pricing</title>
        </Head>
        <Layout pageProps={props}>
          <div className="container">
            <HeaderWithBg title="Pricing" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Pricing of Our Services</h2>
            <section className="content">
              <p>Our servicing price are transparent, calculated based on per-trip basis.</p>
              <p>We offer three categories of pricing.</p>
              <ul>
                <li>3 hours service charge: Rm 145, </li>
                <li>4 hours service charge: Rm 165, </li>
                <li>5 hours service charge: Rm 185. </li>
              </ul>
              <p>Each booking service only include one pick up and one location visit. Extra charge for additional time and location visit.</p>
              
              <p>Additional service:</p>
              <ul>
                <li>1 hour: Rm 35, </li>
                <li>2 hours: Rm 60,</li>
                <li>One visit location: Rm 50,</li>
                <li>One hour and one location visit: Rm 70, </li>
                <li>Express booking: Rm 50. (Appear when additional service requested). </li>
              </ul>
              <p>Important: Book service must with payment done 7 days advance prior date service.</p>
              <ul>
                <li>Company bank account: 6677651328</li>
                <li>Email or Whatsapp bank slip to us.</li>
              </ul>

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

export default Pricing; 