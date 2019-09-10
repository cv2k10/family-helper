import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

class HowItWorks extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>How It Works</title>
        </Head>
        <Layout>
          <div className="container">
            <HeaderWithBg title="Excellent Companionship Services" bgimg="/static/img/bg.jpg"></HeaderWithBg>
            <h2>Ensure you live independently and happily</h2>
            <section className="content">
              <p>Our companionship service ensure you or your loved one can live indepandantly, happily and securily.</p>   

              <ol>
               <li>Call us for more info or consultation about our services ,and discuss how we can assist you or your love d one.</li>                  
               <li>Choose your need Service,Date,Time,Visit location,submit your application to us</li>
               <li>Book service,we will  call you back as soon for some detail verification. And will forward our companion people detail to you two day prior date service.</li>     <li>Payment fee, Currently we only accept  cash payment,bank in directly to company account ,email or whatspp your bank slip to us.</li>
              </ol>           
            </section>
          </div>
        </Layout>

      </div>
    );
  }
}

export default HowItWorks; 