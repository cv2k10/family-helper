import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

const CustomerComments = (props) => {
    return (
      <div>
        <Head>
          <title>What Our Customer Comments About Family Helper</title>
        </Head>
        <Layout pageProps={props}>
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
              <blockquote><p>My daily living task and hang out activities fully care by your guys,I feel safe and secured.  Sincerely thanks for your company companion person professional works.</p>
                <footer>Mohd bin Sadin</footer>
              </blockquote>
              <blockquote><p>I regular send my senior to acupuncture centre, sometime he have to take public transport alone due to my busy work schedule, I always fear of his personal  safety.  But now with family helper, I feel great and grateful to your guys.</p>
                <footer>John Leong</footer>
              </blockquote>               
                           
            </section>
          </div>
        </Layout>

      </div>
    );
}

export default CustomerComments; 