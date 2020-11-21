import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

const AboutUs = (props) => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout pageProps={props}>
        <div className="container">
          <HeaderWithBg title="About Us" bgimg="/static/img/bg.jpg"></HeaderWithBg>
          <h2>About Our Company</h2>
          <section className="content">
            {/* <p><strong>Family Helper</strong>, a pioneer senior companionship services in Malaysia. Founded in 2019, a platform provides companion work for senior, ensure they can continue personal daily life. Some senior may not need caregiver or in-house care, but many still need help companion assistance to carry out day-to-day activities like doctor appointment, grocery shopping, city tour, re-union with friend/relative, market walk, and more.</p>
            <p>Family helper began due to founder personal experienced with senior about their problem ‘when attending doctor appointment’, doing errands work in bank, dealing with government department, miss way home and more.  Realized the problem and important of companionship service for seniors, this platform was founded.Our main purpose is to reduce senior family member from stress and burden, who always full-time employee, can’t cater their senior needs.</p>
            <p>We are not a healthcare provider also do no provide medical consultation but merely offer assistant companion work to help needed seniors continue their daily living. Our mission is to support the senior and their family.</p>
            <p>We pledge to provide excellent and professional works for seniors. Your senior will feel amazing experienced with our companion team members, who always committed, cheerful, passionate and helpful.  We are serious of quality deliver work to our customers and work persistently to earn their trust.</p>
            <p>Our online booking website are fast, save time and convenient.  It will increase customer satisfaction and reduce response time, all while maintain reasonable and affordable price.</p>
            <p>Currently our business operation only available in Klang Valley, mainly focus area Cheras, Kuchai Lama, Ampang, Sri Petaling. We plan expand this service coverage area to entire Klang Valley within 6 months time.  And we expect the companionship services will fully operational in whole Malaysia given 1 - 2 years time.</p> */}

            <p><strong>Family Helper</strong>, a pioneer seniors companionship services in malaysia. Founded in 2020, a platform provides companion work for senior,ensured they can continue personal daily life without depending on family members. Some senior may not need caregiver or in home care,but maybe companion assistant to carry out their daily living task like doctor appointment,grocery shopping,run errands and more.<p></p>Family helper began due to founder personal experienced with seniors problem when they attending doctor appointment,doing run errands, grocery shopping in mall and miss way home.<p></p>Realized the difficulties facing by senior,founder feel something need be done to help them overcome the problem, finally this platform was founded.<p></p>We are a non medical health care provider, merely offered assistant companion service to help needed seniors continue independent personal daily living.<p></p>Our main purposed is to reduce senior members family stress and burden, most full-time employee can't cater their need.<p></p>We pledged to provide excellent and professional service for seniors.<p></p>Your senior will feel amazing experience with our companion teams member.<p></p>They always committed ,helpful,cheerful and passionated when carrying out their duty job.<p></p>We are serious of quality deliver works to our customer and  work persistently to earn their trust.<p></p>Booking our services online are fast, save time, easy and convenient.<p></p>It helps reduce response time while increase customer satisfaction, more importantly maintained affordable price.<p></p>Currently our business operation only available in klang valley, mainly focus area are cheras,kajang,Ampang, sri Petaling and radius distance within 25 km from kl city centre.<p></p>We planned expand this service coveraged to entire klang valley within 6(six) months time.<p></p>And we expect the seniors companionship services business will fully operational in entire malaysia within two years time.</p>
          </section>
        </div>
      </Layout>

    </div>
  );
}

export default AboutUs; 