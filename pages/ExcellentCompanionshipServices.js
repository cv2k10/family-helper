import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class ExcellentCompanionshipServices extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Excellent Companionship Services</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Excellent Companionship Services" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Match our services with your needs</h2>
            <section className="content">
              <p>We offered this championship services enable you can carry out normal daily tasks, while member of families can focus theirs tied rotate works.</p>
              <p> We will provide trusted,reliable senior companionship service  ensured you or your senior live with sense of dignity and positive mindset.</p>

              <p>Trusted, reliable, amazing senior companionship services.  Matched your senior needs with our services.</p> 

              <p>Services offered:</p>
              <ul>
                <li>Doctor appointment</li>
                <li>Grocery shopping</li>
                <li>Rehabilitation centre</li>
                <li>Relative/friend visit</li>
                <li>City tour</li>
                <li>Tachi practising</li>
                <li>Dialyses centre</li>
                <li>And more</li>   
              </ul>

              <Link href="./OrderForm">
                <div className="btn-full">
                  <a>Order Our Services Now</a>
                </div>
              </Link>

            </section>
          </div>
        </Layout>

        <style jsx>{`
          li {
            margin-left: 1em;
            list-style: inside;
          }
        `}</style>

      </div>
    );
  }
}

export default ExcellentCompanionshipServices; 