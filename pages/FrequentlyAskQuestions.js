import Head from 'next/head';
import React from 'react';
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/page_faq.scss";
import "../scss/style.scss";

const state = {
    faqs: [
      {
        q: "What Family Helper doing?",
        // a: "We provides companion works for seniors like doctor appointment, grocery shopping, city tour, market walk, welcome relative or friend and more."
        a: "We provides companionship for senior to carry out daily living like doctor appointment,grocery shopping, doing run errands, city tour and more. A non medical service provider."
      },
      {
        // q: "Senior companion work, how it works?",
        // a: "Our companion people pick you at your home, send you for an appointment, accompany until your appointment finished, drives you back home."
        q: "Senior companionship service, how it works?",
        a: "Our companion person pick senior from home,drives senior for an appointment, accompany and with senior till appointment finished,send senior back home."
      },
      {
        q: "Are this companion people safe for my senior?",
        // a: "Our companion people are through stringent recruitment process like personal interviewed, background check, vehicle inspection, validity of driving licence and insurance car, your senior are safe and secure."
        a: "Our companion people vet through stringent recruitment process like personal interview, background check , driving behavior test,car inspection  and more. You senior are safe and secured. "
      },
      {
        // q: "How can I made booking?",
        // a: "Go to our website request service page, fill your personal and service details, submit your application. Book service must with payment done 7 days advance prior to date of service."
        q: "How can I make booking for this senior companionship service?",
        a: "it was simple, fill senior and need service detail on our webpage, submit application on line."
      },
      {
        q: "What is your company payment method?",
        // a: "Currently, we only accept payment cash drect bank into company account. Email or Whatsapp bank slip to us, we call back you as soon."
        a: "Currently, we only accept cash payment, direct bank in company account."
      },
      {
        // q: "I have completed my booking with payment done, what is next?",
        // a: "Currently, we only accept payment cash direct bank into company account. Email or Whatsapp bank slip to us. Thanks for your trust of our company, we will call you back for some detail verification as soon.We will send our companion person detail to you, two days before date service."
        q: "I already make payment ,what is next?",
        a: "Email or whatsapp payment slip to us attached with name,contact number and email no. We will call   you back for some detail verification as soon."
      },
      {
        // q: "Can I change some my booking detail?",
        // a: "Yes, this shall be done 5 days prior date service.  Booking fee charge may change according change you made, we only proceed with service after you accept new rate price."
        q: "Can I change some my booking detail?",
        a: "Yes, do let us know five days in advance prior date service. This may result change of fee service,and we only proceed the service after you agreed with new rate price."
      },
      {
        // q: "What is your companion service coverage area?",
        // a: "Currently, our operate business focus at Klang Valley mainly Cheras, Kuchai Lama, Ampang and Sri Petaling.  You do encourage apply if service not in your coverage area, we try yo accommodate your request, but not guaranteed."
        q: "Can I request for deferment my senior service?",
        a: "Yes, informed us five days advance prior date service. This deferment of service only valid for two months period."
      },
      {
        // q: "Will any your staff call me before the pick up day?",
        // a: "Yes, one day prior pick up day, our staff contact and reminds you about the appointment, no worry."
        q: "will any your staff call us before the pick up days?",
        a: "Yes,one day prior the pick up date, we will call and remind you, no worry."
      },
      {
        // q: "I must with senior on the pick up day?",
        // a: "Not necessary, just explain to your loved senior about the companionship service, important for him to understand this process of companion work."
        q: "I must with senior together on pick up day?  ",
        a: "No necessary, explained and let your senior understand our service process."
      },
      {
        // q: "Can home maid follow together with senior?",
        // a: "Yes, let us know early, we will coordinate with our companion people for further arrangement."
        q: "Can housemaid together with senior?",
        a: "Yes, do inform us early, but we not responsible any untoward incident happened of your maid."
      },
      // {
        // q: "What is your company waiting policy for pick up time?",
        // a: "15 minutes advance arrival of companion people at pick up point, punctual departure time is crucial to avoid late for appointment."
      // },
      {
        // q: "What is your company cancellation policy?",
        // a: "Cancellation notice should be reached us 72 hours before date service (by phone call, email or Whatsapp), 50% price service or Rm100 be forfeited, whichever is higher. Refund will be done on 14 working days. No refund for cancellation service less than 72 hours."
        q: "What is your company cancellation service policy?",
        a: "Cancellation notice must reached us five days advance prior date service by email, whatsapp or call. 50% fee service be forfeited, and refund payment will be done on 14(fourteen) working days.  No refund for cancellation service notice less then five days."
      }, 
      {
        // q: "Can I request for deferment appointment?",
        // a: "Yes, inform us at least 5 days advance before service date. This deferment period valid for one month."
        q: "What is your company cancellation service policy?",
        a: "Cancellation notice must reached us  five days advance prior date service by email ,whatsapp or call. 50%  fee service be forfeited,and refund payment will be done on 14(fourteen) working  days. No refund for cancellation service  notice less then five days."
      },
      {
        q: "what happened if I make booking service less then seven days prior date service?",
        a: "Booking service less then seven days,it consider \"Express booking\", and we charge extra rm 50"
      },
      {
        q: "What is your company waiting time policy for picking senior?",
        a: "Our companion people will wait infront senior house 15 (fifteen)minutes in advance prior service time.  Punctual leaving time are crucial to avoid any late of senior appointment."
      },     
      {
        q: "What is your company senior compsnioship service coveraged area?",
        a: "Currently our business operation focus at klang valley mainly cheras,Sri Petaling ,Ampang ,kajang  and surrounding distance  25 km from city centre kl. We encouraged those need our service but not within your coverage area too apply,we try accommodated your request but not guaranteed"
      },
      {
        q: "My senior need extra assistant,can your company provide it?",
        a: "Do let us know early what kind extra assistant your senior needed, we try to fulfill your request,but not guaranteed."
      }, 
      {
        q: "Can I apply this senior compsnioship service if my senior having regular medicine consuming daily?",
        a: "No problem, informed us schedule time consuming medicine ,our companion person extra caution this matter.  Anyhow, this shall on your own risk and we not beared any responsible if any untoward incident happened for your senior."
      },    
      {
        q: "How can I make additional time or location visit for my senior?",
        a: "Call our servicing staff directly, they will coordinate with our companion person for further arrangement."
      }, 
      {
        q: "What happened if  my senior compsnioship  service needed  not in your company service list?",
        a: "No worry, filled your senior request service on Other Service space and submit your application, we will contact you back as soon."
      },                       
      {
        q: "Did your company accept ‘express booking’?",
        a: "Yes, service request less than 7 days, consider as ‘express booking’.  We will charge extra RM50.00 in usual normal book price."
      },
      {
        q: "How does your company calculate service price?",
        a: "Our service price are based on per-trip basis, it was included transportation, length time service, companion person salary and location visit."
      },
      {
        q: "How can I make additional time or location visit?",
        a: "Call our customer service for the arrangement, we will coordinate with our companion people."
      },
      {
        q: "My Senior need extra assistant, can your company provide it?",
        a: "Do let us know early, what kind extra assistant needed, we try to fulfill your request, but not guaranteed."
      },
      {
        q: "Can I book this service for only 2 hours?",
        a: "Sorry, our company companionship service time minimum is 3 hours."
      },
      {
        q: "Does your company offer home care service for senior?",
        a: "At this moment no, we will include this home care service as soon."
      }, 
      {
        q: "I like to use your company service, but service work not listed?",
        a: "Fill your need service of OTHER SERVICE column, submit your application, we will call your back as soon."
      },
      {
        q: "My senior having regular medicine consumed, are your company accept our application?",
        a: "No problem, let us know schedule time consumption medicine, we advise companion person extra caution this matter. But anyhow this fully on your own risk, if any untoward incident happened."
      },
      {
        q: "I am still confused about the booking date, 7 days in advance, can you explain about this?",
        a: "No problem, example you request for our service is on 25/5/19, booking date and payment shall be doned on or before 18/5/19. And Whatsapp or email bank slip to us."
      },
      {
        q: "My senior doctor appointment time is 9:00am, what booking time to avoid late for appointment?",
        a: "One hour or more estimation time to reach your appointment destination, but this merely estimate time, we not responsible for any late of appointment. (9:00am appintment, book time shall on or before 8:00am)"
      }, 
      {
        q: "My senior with multiple chronic disease and bedridden, can i request your company senior companionship service?",
        a: "Sorry, our senior companion services only provide to healthy senior those needs transportation and companion assistant helps."
      },          
      
    ]
  };

const handleToggle = e => {
    const { classList: c } = e.currentTarget;
    c.contains("visible") ? c.remove("visible") : c.add("visible");
}

const FrequentlyAskQuestions = (props) => {
  return (
    <div>
      <Head>
        <title>FAQ</title>
      </Head>
      <Layout pageProps={props}>
        <div className="container">
          <HeaderWithBg title="FAQ" bgimg="/static/img/bg.jpg"></HeaderWithBg>
          <h2>Refer to our FAQ or contact us</h2>
          <section className="content">
            <ul id="faq" className="cd-faq__group">
              {/* <li className="title">
                <h2>FAQ</h2>
              </li> */}

              {state.faqs.map((a, i) =>
                <li className="item" key={i} onClick={e => handleToggle(e)}>
                  <a><span>{a.q}</span></a>
                  <div className="content">
                    <p>{a.a}</p>
                  </div>
                </li>
              )}
            </ul>           
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default FrequentlyAskQuestions; 