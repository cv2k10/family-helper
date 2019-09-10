import Head from 'next/head';
import React from 'react';
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
              <p>Services offered:</p>
              <ul>
                <li>doctor appointment</li>
                <li>grocery shopping</li>
                <li>rehabilitation centre</li>
                <li>relative/friend visit</li>
                <li>city tour</li>
                <li>tachi practising</li>
                <li>dialyses centre</li>
                <li>And more</li>   
              </ul>
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