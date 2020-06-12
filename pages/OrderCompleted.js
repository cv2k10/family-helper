import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import prices from '../components/prices.js';
import moment from 'moment';


// import services from '../services/items.js';

const OrderCompleted = (props) => {
  const router = useRouter()
  const { created, fullname, email, gender, age, health, healthstatus, phone, /* phonehome, */ fulladdress, /* urgent,*/ service, otherservice, date, period, time, area, pickup, visit, price} = router.query;

  console.log(JSON.stringify(router.query))
  console.log('otherservice: ' + (otherservice == ''))

  const title = 'Order Completed'
  return (
    <Layout pageProps={props}>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="section">
        <h2>Order Completed by {fullname}</h2>
        <h4>Thank you for your order</h4>

        <div>The order information:</div>
        <div>
          <br />
        </div>
        <div>
          Order Date: <b>{moment(created).format("ddd, DD MMM YYYY")}</b>
        </div>
        <div>
          Order Id: <b>203001</b>
        </div>
        <div>
          Service Name: <b>{service}</b>
        </div>
        {otherservice !== "" ? (
          <div>
            Other service: <b>{otherservice}</b>
          </div>
        ) : null}
        <div>
          Area: <b>{area}</b>
        </div>

        <div>
          Total price: <b>{price}</b>
        </div>
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
          Gender: <b>{gender}</b>
        </div>
        <div>
          Age: <b>{age}</b>
        </div>
        <div>
          <br />
        </div>
        <div>
          Health: <b>{health}</b>
        </div>
        {healthstatus !== "" ? (
          <div>
            Health Status: <b>{healthstatus}</b>
          </div>
        ) : null}

        <div>
          Phone&nbsp;Number: <b>{phone}</b>
        </div>
        <div>
          <b>
            <br />
          </b>
        </div>
        <div>home Address:&nbsp;</div>
        <div>
          <b>{fulladdress}</b>
        </div>
        <div>
          <br />
        </div>
        {/* <div>Urgent Phone Number: <b>{urgent}</b></div> */}
        <div>
          Date: <b>{moment(date).format("ddd, DD MMM YYYY")}</b>
        </div>
        {/* <div>Start Time: <b>{timefrom}</b></div> */}
        <div>
          Period: <b>{period} Hours Services</b>
        </div>
        <div>
          Time: <b>{time}</b>
        </div>
        <div>
          <br />
        </div>

        <div>Pickup Location:&nbsp;</div>
        {pickup !== "" ? (
          <div>
            <b>{pickup}</b>
          </div>
        ) : (
          <div>
            <b>(same as home address)</b>
          </div>
        )}
        <div>
          <br />
        </div>
        <div>Visit Location:&nbsp;</div>
        <div>
          <b>{visit}</b>
        </div>
      </section>
    </Layout>
  );
}

export default OrderCompleted;
