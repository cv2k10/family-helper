import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import HeaderWithBg from '../../components/HeaderWithBg';
import services from '../../components/items.js';
import Layout from '../../components/Layout';
import "../../scss/fonts.scss";
import "../../scss/page.scss";
import "../../scss/style.scss";



const Service = function() {
  const def = { // default contents
    title: 'Default title',
    main: 'Deault main content',
  };

  const [content, setContent] = useState(services);

  const router = useRouter(); 
   
  let serviceContent = {
    title: '',
    main: '',
  };

  //useEffect(() => {
    const serviceId =  router.query.service;
    const currentService = content.items.filter(s => s.service === serviceId);    
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