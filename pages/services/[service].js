import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import HeaderWithBg from '../../components/HeaderWithBg';
import Layout from '../../components/Layout';
import "../../scss/fonts.scss";
import "../../scss/page.scss";
import "../../scss/style.scss";

const Service = function() {
  const def = { // default contents
    title: 'Default title',
    main: 'Deault main content',
  };
  
  const initState = {
    services: [ // setting all the services contents
      {
        service: 'DoctorAppointment',
        title: 'Doctor Appointment',
        main: 'You or your senior have a doctor appointment, children are busy with job works, no worry, contact us, our companion people will pick you from your house, send you to destination hospital or clinic, accompany you in doctor room until appointment finished, send you back home.',
        details: [
          {
            icon: 'people-in-car-side.png',
            text: 'Pick you from home'
          },
          {
            icon: 'stethoscope-100.png',
            text: 'Drives you to clinic or hospital'
          },
          {
            icon: 'machine-100.png',
            text: 'Accompany you in doctor room'
          },     
          {
            icon: 'home-100.png',
            text: 'Send you back home'
          },               
        ]
      }, // DoctorAppointment
      {
        service: 'GroceryShopping',
        title: 'Grocery Shopping',
        main: 'You or your loved one want to buy some grrocery items for daily living, no transport, call us, we can assit you. We pick you from your home, drives you to shopping store, carry your plastic bag, accompany you do purchasing, drives you back home.',
        details: [
          {
            icon: 'people-in-car-side.png',
            text: 'Pick you from home'
          },
          {
            icon: 'ingredients-100.png',
            text: 'Drives you to grocery store'
          },
          {
            icon: 'machine-100.png',
            text: 'Carry bag for you'
          },     
          {
            icon: 'home-100.png',
            text: 'Send you back home'
          },               
        ]
      }, // GroceryShopping    
      {
        service: 'RehabilationCenter',
        title: 'Rehabilation Center',
        main: 'You or your senior have regular treatment at rehabilation centre, fear of trouble working children, no problem, contact us, we deliver you ti the destination centre. We pick you to from your home, drive you to the rehabilation center, accompany you until treatment finished, send you back home.',
        details: [
          {
            icon: 'people-in-car-side.png',
            text: 'Pick you from home'
          },
          {
            icon: 'physical-therapy-100.png',
            text: 'Drives you to rehabilation centre'
          },
          {
            icon: 'machine-100.png',
            text: 'Accompany at rehabilation centre'
          },     
          {
            icon: 'home-100.png',
            text: 'Send you back home'
          },               
        ]
      }, // RehabilationCenter         
      {
        service: 'common',
        title: 'Family Helper Service',
        main: 'You and your senior want to go some place, children are busy with job works, no problem, call us, our companion people will pick you from your house, send you to the destination and wait until your appointment finished, send you back home.',
        details: [
          {
            icon: 'people-in-car-side.png',
            text: 'Pick you from home'
          },
          {
            icon: 'city-100.png',
            text: 'Drives you to the place'
          },
          {
            icon: 'machine-100.png',
            text: 'Wait until you finished the task'
          },
          {
            icon: 'home-100.png',
            text: 'Send you back home'
          },
        ]
      }, // common
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
    // else serviceContent = {
    //   title: 'Page Not found',
    //   main: 'Deault main content',
    // };
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
                  <img src={'/static/img/' + serviceContent.details[0].icon} />
                  <p>{serviceContent.details[0].text}</p>
                </div>

                <div className="next-arrow">
                  <img src={'/static/img/down-arrow-100.png'} />
                </div>

                <div className="detail">
                  <img src={'/static/img/' + serviceContent.details[1].icon} />
                  <p>{serviceContent.details[1].text}</p> 
                </div>

                <div className="next-arrow">
                  <img src={'/static/img/down-arrow-100.png'} />
                </div>
 
                <div className="detail">
                  <img src={'/static/img/' + serviceContent.details[2].icon} />
                  <p>{serviceContent.details[2].text}</p> 
                </div>

                <div className="next-arrow">
                  <img src={'/static/img/down-arrow-100.png'} />
                </div>
 
                <div className="detail">
                  <img src={'/static/img/' + serviceContent.details[3].icon} />
                  <p>{serviceContent.details[3].text}</p> 
                </div> 
              </div>
            </section>
          ): null}

        </div>
      </Layout>

      <style jsx>{`
        .details {
          margin: 1em 1em;
        }
        .details .detail {
          display: flex;
          flex-direction: row;
          align-items: center;
          /* justify-content: center; */         
        }  

        .details .detail p {
          margin-left: 1em;
          color: #3498DB;
        }

        .details .detail img {
          width: 5em;
          height: auto;
        }

        .next-arrow {
          display: flex;
          width: 5em;
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