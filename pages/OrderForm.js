import 'isomorphic-fetch';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import areas from '../components/areas.js';
import services from '../components/items.js';
import Layout from '../components/Layout';
import prices from '../components/prices.js';
import "../scss/fonts.scss";
import "../scss/style.scss";

const submitForm = formData => {

  const data = {
    form: {
      fullname: formData.fullname.value,
      email: formData.email.value,
      gender: formData.gender.value,        
      age: formData.age.value,
      health: formData.health.value,
      healthstatus: formData.healthstatus.value,
      phone: formData.phone.value,
      fulladdress: formData.fulladdress.value,
      urgent: formData.urgent.value,
      service: formData.service.value,
      otherservice: formData.otherservice.value,
      date: formData.date.value,
      timefrom: formData.timefrom.value,
      price: formData.price.value,
      area: formData.area.value,
      pickup: formData.pickup.value,
      visit: formData.visit.value,
    }
  }

  // console.log(JSON.stringify(data, null, 2));

  fetch('/api/order', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    // res.status === 200 ? this.setState({ submitted: true }) : ''
    if(res.status === 200) 
      Router.push({
        pathname: '/OrderCompleted',
        query: data.form
      })
  })
}

const Order = () => {

  const initSelection = {
    services: services.items,
    areas: areas.klangValley,
    period: prices.common.periods[0].hour
  }

const nextDayDate =() => {
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);
    return tomorrow.toISOString().split('T')[0];
  }

const inputHealthStatus = useRef();
const inputOtherService = useRef();
const [selection, setSelection] = useState(initSelection);
const [totalPrice, setTotalPrice] = useState(prices.common.periods[0].price);
const [queryInput, setQueryInput] = useState({});
const router = useRouter();

const [period, setPeriod] = useState(prices.common.periods[0].hour);

const h24To12 = (h) => {
    return h === 0 || h === 24  ? '12:00am' :
    h === 12 ? '12:00pm' :
    h%12 + ':00' + (h > 11 && h < 24 ? 'pm' : 'am')
}

const isExpress = (dateString, days) => {
    const date = new Date(dateString);
    const todayString = new Date().toISOString().split('T')[0];
    const today = new Date(todayString);
    const oneWeek = today.getTime() + days * 24 * 60 * 60 * 1000;
    return date.getTime() < oneWeek;
}


useEffect(
  () => {
    // const subscription = props.source.subscribe();
    console.log(JSON.stringify(router.query));
    setQueryInput(router.query);

    return () => {
      // subscription.unsubscribe();
    };
  },
  [],
);


const title = 'Contact Page';

return (
  <Layout>
    <Head>
      <title>{title}</title>
    </Head>
    <section className="enquiry section">
      <div className="enq-header">Request of Services</div>
      <div className="form-title">Customer Details</div>
      <form className="enq-form" onSubmit={e => {
        e.preventDefault()
        submitForm(e.target)
      }}>
        
        <input type="text" id="fullname" name="fullname" placeholder="Full Name" required/>
        <input type="email" id="email" name="email" placeholder="Email" required/>

        <p style={{marginBottom: 0}}>Gender: </p>
        <span style={{flex: 1}}>
          <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Male</label>
        </span>
        <span style={{flex: 1}}>              
            <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </span>

        <input type="number" id="age" name="age" min="18" max="120" placeholder="Age" required/>

        <p style={{marginBottom: 0}}>Health Status: </p>
        <span style={{flex: 1}}>
          <input type="radio" id="health-good" name="health" value="good" defaultChecked={true} 
          onChange={()=>inputHealthStatus.current.className = 'disp-none'} 
          />
            <label htmlFor="health-good">Good</label>
        </span>
        <span style={{flex: 1}}>              
            <input type="radio" id="health-poor" name="health" value="poor" 
            onChange={()=>inputHealthStatus.current.className = 'disp-block'}  
            />
          <label htmlFor="health-poor">Poor</label>
        </span>

        <input type="text" id="healthstatus" name="healthstatus" placeholder="Elaborate health status" className="disp-none"
        ref={inputHealthStatus}
        />

        <input type="tel" id="phone" name="phone" placeholder="Hand Phone Contact" required/>

        <input type="tel" id="phone" name="phonehome" placeholder="House Phone Contact"/>

        <textarea id="fulladdress" name="fulladdress" placeholder="Full Address"></textarea>

        <input type="text" id="urgent" name="urgent" placeholder="Urgent Phone Contact" required/>
        
        <div className="form-title">Service Details</div>

        <select id="enq-service" name="service" 
        value={queryInput.service || ""}
        className="dropdown"
        onInput={e=>{
          console.log('e: ' + e.target.value)
          inputOtherService.current.className = e.target.value==='OtherService'? 'disp-block': 'disp-none';
          setQueryInput({ ...queryInput, service: e.target.value});
          }
        }>
          <option value="">Select Service</option>
          {selection.services.map((service, i) => (
            <option value={service.service} key={i}>{service.title}</option>
          ))}
        </select>
        <input type="text" id="other" name="otherservice" className="disp-none" placeholder="Please specify other service" 
        ref={inputOtherService}
        />

        <input type="date" id="date" name="date" placeholder="Date Service Needed" 
          value={queryInput.date || ""}
          min={nextDayDate()}
          onChange={e => {
            setQueryInput({ ...queryInput, date: e.target.value });
            const selected = prices.common.periods.find(p => p.hour === +selection.period);
            var tp = selected.price + (isExpress(e.target.value, prices.common.expressPeriod) ? prices.common.expressFee : 0);
            setTotalPrice(tp);     
          }}
        />
        <p>{isExpress(queryInput.date, prices.common.expressPeriod) ? <i className="mt-0">Express service selected (RM{prices.common.expressFee}.00)</i>: null}</p>

        <p style={{marginBottom: 0}}>Period: </p>
        <div onChange={(e)=>{
          const period = e.target.value;
          console.log("period: "+ period)
          setSelection({...selection, period});

          const selected = prices.common.periods.find(p=> p.hour === +period);

          console.log("Period/ selected: " + JSON.stringify(selected))
          setTotalPrice(selected.price + (isExpress(queryInput.date, prices.common.expressPeriod) ? prices.common.expressFee: 0))
          }}
          value = {period}
        >
          
            { prices.common.periods.map((p,i) => (
            <div>
              <input type="radio" id={'period' + p.hour} name="period" value={p.hour} defaultChecked={i===0} />
              <label htmlFor={'period' + p.hour}>{p.hour + ' Hours Services: Rm' + p.price + '.00'}</label> 
            </div>             
            )) }
          
        </div>

        <select id="enq-service" name="time"
          value={queryInput.time || ""}
          onChange={e => setQueryInput({ ...queryInput, time: e.target.value })}
          className="dropdown">
          <option value="">Select time period</option>
          {[...new Array(services.hourEnd - services.hourStart + 1)].map((_, i) => (
            <option value={services.hourStart + i} key={i}>{h24To12((services.hourStart + i))} - {h24To12(services.hourStart + i + +selection.period) + ' (' + selection.period + ' hours)'} 
            </option>
          ))}
        </select>        

        <select id="enq-area" name="area" 
        value={queryInput.area || ""}
        onChange={e => setQueryInput({ ...queryInput, area: e.target.value })}
        className="dropdown">
          <option value="">Select Area</option>
          {selection.areas.map((area, i) => (
            <option value={area.name} disabled={!area.select} key={i}>{area.name}</option>
          ))}
        </select>
        <textarea id="pickup" name="pickup" placeholder="Pickup Location"></textarea>
        <textarea id="visit" name="visit" placeholder="Visit Location"></textarea>
        
        <h2>Total Price: RM{totalPrice}.00</h2>
        <input type="submit" value="Order" />
      </form>
    </section>
  </Layout>
)
}

export default Order