import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import prices from '../components/prices.js';
import moment from 'moment';


// import services from '../services/items.js';

const MessageCompleted = (props) => {
  const router = useRouter()
  const { created, fullname, email, phone, message } = router.query;

  console.log(JSON.stringify(router.query))

  const title = 'Order Completed'
  return (
    <Layout pageProps={props}>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="section">
        <h2>Message sent to Family Helper</h2>
        <h4>Thank you for message</h4>

        <div>Message information:</div>
        <div>
          <br />
        </div>

        <div>
          Full&nbsp;Name: <b>{fullname}</b>
        </div>
        <div>
          Email Address:{" "}
          <b>
            <a href="mailto:${email}" target="_blank">
              {email}
            </a>
          </b>
        </div>
        <div>
          <br />
        </div>

        <div>Message: </div>
        <div>
          <b>{message}</b>
        </div>
      </section>
    </Layout>
  );
}

export default MessageCompleted;