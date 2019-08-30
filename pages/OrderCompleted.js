import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";


// import services from '../services/items.js';

const OrderCompleted = () => {
  const router = useRouter()
  const { fullname, email, gender, age, health, healthstatus, phone, fulladdress, urgent, service, otherservice, date, timefrom, price, area, pickup, visit } = router.query;

  console.log(JSON.stringify(router.query))

  const title = 'Order Completed'
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <section className="section">
        <h2>Order Completed by {fullname}</h2>
        <h4>Thank you for your order</h4>

    <div>The order information:</div>
    <div>
        <br/>
    </div>
    <div>Order Date: <b>30 Aug 2019</b></div>
    <div>Order Id: <b>203001</b></div>
    <div>Service Name:&nbsp;<b>{service}</b><b><br/></b></div>
    <div>Total price:<b>{price}</b></div>
    <div>
        <br/>
    </div>
    <div>Full&nbsp;Name: <b>{fullname}</b></div>
    <div>Email Address: <b><a href="mailto:${email}" target="_blank">{email}</a></b></div>
    <div>Gender: <b>{gender}</b></div>
    <div>Age: <b>{age}</b></div>
    <div>
        <br/>
    </div>
    <div>Health Status: <b>{health}</b></div>
    <div>Phone&nbsp;Number: <b>${phone}</b></div>
    <div><b><br/></b></div>
    <div>Full Address:&nbsp;</div>
    <div><b>{fulladdress}</b></div>
    <div>
        <br/>
    </div>
    <div>Urgent Phone Number: <b>{urgent}</b></div>
    <div>Date: <b>${date}</b></div>
    <div>Start Time: <b>{timefrom}</b></div>
    <div>Period: <b>{price}</b></div>
    <div>
        <br/>
    </div>
    <div>Pickup Location:&nbsp;</div>
    <div><b>{pickup}</b></div>
    <div>
        <br/>
    </div>
    <div>Visit Location:&nbsp;</div>
    <div><b>{visit}</b></div>
      </section>
    </Layout>
  )
}

export default OrderCompleted;
