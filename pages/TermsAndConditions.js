import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tnc: [
        'By accessing,browsing ,down loading using our platform service,you knowledge that you are liable comply with and bound by company Terms and Regulation .You must immediately discontinue your access use the services if disagree any part of term.',
        'Our company have absolute right suspend ,discontinue,and restrict you access to our platform services temporarily or permanently without notice to you or liability to us. Our platform may revise,update even change this terms anytime,you are binding acceptance any updated or change terms.',
        'When dealing with our company,you must provide accurate,completed or current information,all the time comply any instruction to use our services. You solely responsible for all cost and expenses may incur access to this platform.',
      'We may immediately terminate or suspend your access to our services,if you breach these Terms or Regulation ,like provide false information or do direct negotiation price with our companion person.',
      'We are not responsible nor liable for any direct,indirect,economic,consequential loss,damage,expenses that you may suffer of or in connection with the"Act",omission or negligence of this companion person. We make no warranties of the quality,sustantability ,safety or ability of this companion people.',
      'You are in your own risk by using our platform services. Any form of risk shall pass to yourself,we merely performed  a service delivery,and not liable of any lost,damage or casualties due to untoward incident happened.',
      'You agreed to indemnify our platform and companion people against all cost ,losses,damages,expenses and liabilities,and any claims arising from your own action in anywhere connection with the services,or breach your obligation as set in these terms and conditions.',
      'Exclusive of liability,except or any legal responsibility in law such as death or personal injury .We are not legally responsible for losses that foreseeable to you when this contract was formed,and not cause by any breach,negligent of company.',
      'All price listed are in Malaysia Ringgit. The price of each services listed merely and indicative price and it subject to change due to change of detail service. We will inform you the actual price and obtain your consent before proceed services.',
    'Arrival time of picking point or deliver time to destination appointment,merely estimate on estimate time and shall not taken as a binding commitment  of company,it will depend on myriad factor such as traffic condition,road accident,bad weather ,heavy rain pour and more. Waiting time 15 minutes of companion people upon arrival at pick up point.',
    'All information,data,graphics,artwork,photo graphic,video,software programmes make available through our platform,consider the owner of property right company. You are straightly prohibited to access and use this platform for own personal and non commercial use.',
    'Confirmation booking of companionship service must with payment done 7 days prior date service. Our company only provide this companion job work after received your bank slip payment.',
    'Cancellation   booking,notice of cancellation service must reach to our company 72 hours prior date service(by email,whatspp),50% of  price  service or Rm100 whichever higher be forfeited .No refund for cancellation less then 72 hours. Any decision  are in our sole and absolute discretion.',
    'In the event our companion people having been arrived you pick up location (after waiting time 30 minutes), but we did not get any response from you or your senior,and we do not  received any notice deferment or cancellation of service,your payment are 100% forfeited.',
    'Your location visit should be done within boundary limit area of Klang valley. Each booking service only include one pick up and one location visit for single senior . Extra charge will imposed for additional time or location visit.',
    'You agreed that you access to or use of link site is entirely at your own risk subject to terms and condition. Our company is not responsible nor shall liable for the contents of any link site.',
    'These terms and our privacy policy constitute entire agreement between you and our company,it supersedes any prior agreement,statement and understanding between you and our company. These terms shall be governed by the laws of Malaysia and each party agrees to submit to the non exclusion jurisdiction of court Malaysia.',  
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