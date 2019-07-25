import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HeaderWithBg from '../../components/HeaderWithBg';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';

import "../../scss/fonts.scss";
import "../../scss/style.scss";
import "../../scss/page.scss";



const Service = function() {
  const def = { // default contents
    title: 'Default title',
    main: 'Deault main content',
  };
  
  const initState = {
    services: [ // setting all the services contents
      {
        service: 'doctorAppointment',
        title: 'Doctor Appointment',
        main: 'You and your senior have a doctor appointment, children are busy with job works, no problem, call us, our companion people will pick you from your house, send you to the destinationand wait until your appointment finished, send you back home.',
        details: [
          {
            icon: 'car',
            text: 'Pick you from home'
          },
          {
            icon: 'driver',
            text: 'Drives you to clinic/hospital'
          },
          {
            icon: 'time',
            text: 'Wait until appointment finished'
          },     
          {
            icon: 'athome',
            text: 'Send you back home'
          },               
        ]
      },
      {
        service: 'relative',
        title: 'Relative Appointment',
        main: def.main,
      },
    ]
  };

  const [content, setContent] = useState(initState);

  const router = useRouter(); 
   
  let serviceContent = {
    title: '',
    main: '',
  };

  //useEffect(() => {
    const serviceId =  router.query.service;
    const currentService = content.services.filter(s => s.service === serviceId);    
    if(currentService.length!==0) serviceContent = currentService[0];
    else serviceContent = {
      title: 'Page Not found',
      main: 'Deault main content',
    };
  //});

  return (
    <div>
      <Head>
        <title>{serviceContent.title}</title>
      </Head>
      <Layout>
        <div className="container">
          <HeaderWithBg title={serviceContent.title} bgimg="/static/img/bg.jpg"></HeaderWithBg>
          <h2>{serviceContent.title}</h2>
          {currentService.length!==0 ? (
            <section className="content">
              <p>{serviceContent.main}</p>
              <div className="details">
                <div className="detail">
                  <Icon img={serviceContent.details[0].icon} />
                  <p>{serviceContent.details[0].text}</p>
                </div>

                <div className="next-arrow">
                  <Icon img='arrow' />
                </div>

                <div className="detail">
                  <Icon img={serviceContent.details[1].icon} />
                  <p>{serviceContent.details[1].text}</p> 
                </div>

                <div className="next-arrow">
                  <Icon img='arrow' />
                </div>
 
                <div className="detail">
                  <Icon img={serviceContent.details[2].icon} />
                  <p>{serviceContent.details[2].text}</p> 
                </div>

                <div className="next-arrow">
                  <Icon img='arrow' />
                </div>
 
                <div className="detail">
                  <Icon img={serviceContent.details[3].icon} />
                  <p>{serviceContent.details[3].text}</p> 
                </div> 
              </div>
            </section>
          ): null}

        </div>
      </Layout>

      <style jsx>{`
        .details .detail {
          display: flex;
          flex-direction: row;
          /* justify-content: center; */         
        }  
        .details .detail p:before {
          content: "- ";
          margin-left: 1em;
        }
        .next-arrow {
          display: flex;
          width: 50px;
          justify-content: center;
          margin-top: .2em;
          margin-bottom: .2em;
        }
        .next-arrow img {
          width: 2.5em;
          height: auto;
        }
      `}</style>

    </div>
  );
}

export default Service; 