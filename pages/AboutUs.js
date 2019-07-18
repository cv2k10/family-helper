import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Contact Us</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="About Us" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>About Our Company</h2>
            <section className="content">
              <p>F Helper, a pioneer senior companionship services in Malaysia. Founded in 201, a platform provides work for senior, ensure they can continue personal daily life. Some senior may not need caregiver or in-house care, but many still need help companion assistance to carry out day-to-day activities like doctor appointment, grocery shopping, city tour, re-union with friend/relative, market walk, and more.</p>
              <p>F helper began due to founder personal exprinced with senior about their problem ‘when attending doctor appointment’, doing errands work in bank, dealing with government department, miss way home and more.  Realized the problem and important of companionship service for seniors, this platform was founded.Our main purpose is to reduce senior member from stress and burden, who always fulltime employee, can’t cater their senior needs.</p>
              <p>We are not a helathcare provider also do no provide medical consultation but merely offer assistant companion work to help needed seniors continue their daily living. Our mission is to support the senior and their family.</p>
              <p>We pledge to provide excellent and professional works for seniors. Your senior will feel amazing experienced without companion team members, who always committed, cheerful, passionate and helpful.  We are serious of quality deliver work to our customers and work persistently to earn their trust.</p>
              <p>Our online booking website are fast, save time and convenient.  It will increase customer satisfaction and reduce response time, all while maintain reasonable and affordable price.</p>
              <p>Currently our business operation only available in Klang Valley, mainly focus area Cheras, Kuchai Lama, Ampang, Sri Petaling. We plan expand this service coverage area to entire Klang Valley within 6 months time.  And we expect the companionship services will fully operational in whole Malaysia given time 1 - 2 years time.</p>
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default AboutUs; 