import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class CustomerComments extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>What Our Customer Comments About Family Helper</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="What Our Customer Comments About Family Helper" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>100% Customer Satisfaction Guarantee</h2>
            <section className="content">
              <blockquote><p>A very helpful and patient companion people, I am happy with their works services, I will continue with this service in future.</p>
                <footer>Karen Tan</footer>
              </blockquote>
              <blockquote><p>I am working employee always worry of my senior monthly rehabilatation treatmen, but now with Family Helper, I feel released and trust their professional work.</p>
                <footer>Ramasy</footer>
              </blockquote> 
              <blockquote><p>Thanks for Family Helper professional companion assistance work, my son always outstation of business, my daily living task and hang out activities. Fully take care by your guys, I feel safe and secure.</p>
                <footer>Mohd bin Sadin</footer>
              </blockquote>
              <blockquote><p>I regular send my senior for acupuncture treatment, but due to busy work schedule, sometime my senior have to take public transport alone. But now with your companion work, I feel released and grateful to all yours worker.</p>
                <footer>John Leong</footer>
              </blockquote>               
                           
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default CustomerComments; 