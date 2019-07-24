import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tnc: [
        'To abuse, harass, threaten, impersonate or intimidate any person;',
        'To post or transmit, or cause to be posted or transmitted, any Content that is libelous, defamatory, obscene, pornographic, abusive, offensive, profane, or that infringes any copyright or other right of any person;',
        'To communicate with 500px representatives or other users in an abusive or offensive manner;',
      'For any purpose(including posting or viewing Content) that is not permitted under the laws of the jurisdiction where you use the Services;',
      'To post or transmit, or cause to be posted or transmitted, any Communication designed or intended to obtain password, account, or private information from any 500px user;',
      'To create or transmit unwanted ‘spam’ to any person or any URL;',
      'To create multiple accounts for the purpose of voting for or against users’ Visual Content;',
      'To post copyrighted Content that does not belong to you, unless you are commenting on Visual Content in Blogs, where you may post such Content subject to providing appropriate attribution to the copyright owner and a link to the source of the Content;',
      'With the exception of accessing RSS feeds, you agree not to use any robot, spider, scraper or other automated means to access the Site for any purpose without our express written permission.Additionally, you agree that you will not: (i) take any action that imposes, or may impose in our sole discretion an unreasonable or disproportionately large load on our infrastructure; (ii) interfere or attempt to interfere with the proper working of the Site or any activities conducted on the Site; or(iii) bypass any measures we may use to prevent or restrict access to the Site;',
    'To artificially inﬂate or alter vote counts, blog counts, comments, or any other Service or for the purpose of giving or receiving money or other compensation in exchange for votes and / or in an attempt to alter the result of any contest or promotion, or for participating in any other organized effort that in any way artificially alters the results of Services;',
    'To advertise to, or solicit, any user to buy or sell any third party products or services, or to use any information obtained from the Services in order to contact, advertise to, solicit, or sell to any user without their prior explicit consent;',
    'To promote or sell Visual Content of another person unless you are expressly authorized to do so; or To sell, assign or otherwise transfer your profile.'       
      ]
    }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Pricing</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Terms And Conditions" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Terms And Conditions</h2>
            <section className="content">
              <ol>
                {this.state.tnc.map(t=><li>{t}</li>)}
              </ol>
              <style jsx>{`
                li {
                  margin-top: 1em;
                }
              `}</style>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default TermsAndConditions; 