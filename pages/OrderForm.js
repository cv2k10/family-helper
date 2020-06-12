import 'isomorphic-fetch';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
// import Script from 'react-load-script';
import Script from 'react-load-script';
import areas from '../components/areas.js';
import services from '../components/items.js';
import Layout from '../components/Layout';
import prices from '../components/prices.js';
import "../scss/fonts.scss";
import "../scss/style.scss";
import moment from 'moment';


const submitForm = formData => { /* onSubmit event with input param, e.target (form) */
  
  const data = {
    form: {
      created: moment().format(),
      fullname: formData.fullname.value,
      email: formData.email.value,
      gender: formData.gender.value,        
      age: formData.age.value,
      health: formData.health.value,
      healthstatus: formData.healthstatus.value,
      phone: formData.phone.value,
      // phonehome: formData.phonehome.value,
      fulladdress: formData.fulladdress.value,
      // urgent: formData.urgent.value,
      service: formData.service.value,
      otherservice: formData.otherservice.value,
      date: formData.date.value,
      period: formData.period.value,
      time: formData.time.value,
      area: formData.area.value,
      pickup: formData.pickup.value,
      visit: formData.visit.value,
      price: formData.price.value,
    }
  }

  fetch('/api/order', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    // res.status === 200 ? this.setState({ submitted: true }) : ''
    if(res.status === 200) { 
      Router.push({
        pathname: '/OrderCompleted',
        query: data.form
      })
    } else throw new Error('Error: response status is ' + res.status);
  }).catch( e => {
    console.error(e.message);
  })
}

const Order = (props) => {

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

  const initGoogleMapsPlaces = () => {
    var inputs = document.querySelectorAll(".autocomplete-places");
    var klangValleyBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(2.866906, 101.291133),
      new google.maps.LatLng(3.370500, 101.794044)
    );

    var autocomplete1 = new google.maps.places.Autocomplete(inputs[0], {
      bounds: klangValleyBounds,
      strictBounds: true,
    });

    var autocomplete2 = new google.maps.places.Autocomplete(inputs[1], {
      bounds: klangValleyBounds,
      strictBounds: true,
    });    

    // Set initial restrict to the greater list of countries.
    autocomplete1.setComponentRestrictions(
      { 'country': 'my' }
    );

    autocomplete2.setComponentRestrictions(
      { 'country': 'my' }
    );    
  };

const inputHealthStatus = useRef();
const inputOtherService = useRef();
const [selection, setSelection] = useState(initSelection);
const [totalPrice, setTotalPrice] = useState(prices.common.periods[0].price);
const [queryInput, setQueryInput] = useState({});
const router = useRouter();

const [period, setPeriod] = useState(prices.common.periods[0].hour);

// show loader upon form submitted
const [showLoader, setShowLoader] = useState(false);

const h24To12 = (h,m) => {
  const minutesStr = ('0' + m).slice(-2); //slice method for extract last 2 digits
  return h === 0 || h === 24  ? `12:${minutesStr}am` :
    h === 12 ? `12:${minutesStr}pm` :
    h%12 + `:${minutesStr}` + (h > 11 && h < 24 ? 'pm' : 'am')
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
console.log("props: " + JSON.stringify(props));

return (
  <Layout pageProps={props}>
    <Head>
      <title>{title}</title>
    </Head>
    <section className="enquiry section">
      <div className="enq-header">Request of Services</div>
      <div className="form-title">Customer Details</div>
      <form
        className="enq-form"
        onSubmit={e => {
          e.preventDefault();
          setShowLoader(true);
          submitForm(e.target);
        }}
      >
        
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full Name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <p style={{ marginBottom: 0 }}>Gender: </p>
        <span style={{ flex: 1 }}>
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
        </span>
        <span style={{ flex: 1 }}>
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
        </span>

        <p style={{ marginBottom: 0 }}>Age: </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <input type="radio" id="age50below" name="age" value="49 or below" />
          <label htmlFor="age50below">49 or below</label>
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <input type="radio" id="age50-59" name="age" value="50 - 59" />
          <label htmlFor="age50-59">50- 59</label>
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <input type="radio" id="age60-69" name="age" value="60 - 69" />
          <label htmlFor="age60-69">60 -69</label>
        </p>
        <p style={{ marginTop: 0, marginBottom: 0 }}>
          <input type="radio" id="age70-79" name="age" value="70 - 79" />
          <label htmlFor="age70-79">70 - 79</label>
        </p>
        <p style={{ marginTop: 0 }}>
          <input type="radio" id="age80above" name="age" value="80 or above" />
          <label htmlFor="age80above">80 or above</label>
        </p>

        <p style={{ marginBottom: 0 }}>Health Status: </p>
        <span style={{ flex: 1 }}>
          <input
            type="radio"
            id="health-good"
            name="health"
            value="good"
            defaultChecked={true}
            onChange={() => (inputHealthStatus.current.className = "disp-none")}
          />
          <label htmlFor="health-good">Good</label>
        </span>
        <span style={{ flex: 1 }}>
          <input
            type="radio"
            id="health-poor"
            name="health"
            value="poor"
            onChange={() =>
              (inputHealthStatus.current.className = "disp-block")
            }
          />
          <label htmlFor="health-poor">Poor</label>
        </span>

        <input
          type="text"
          id="healthstatus"
          name="healthstatus"
          placeholder="Elaborate health status"
          className="disp-none"
          ref={inputHealthStatus}
        />

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Hand Phone Contact (for urgent used)"
          required
        />

        {/* <input type="tel" id="phone" name="phonehome" placeholder="House Phone Contact"/> */}

        <textarea
          id="fulladdress"
          name="fulladdress"
          placeholder="Home Address"
          required
        ></textarea>

        {/* <input type="text" id="urgent" name="urgent" placeholder="Urgent Phone Contact" required/> */}

        <div className="form-title">Service Details</div>

        <select
          id="enq-service"
          name="service"
          value={queryInput.service || ""}
          className="dropdown"
          required
          onInput={e => {
            console.log("e: " + e.target.value);
            inputOtherService.current.className =
              e.target.value === "OtherService" ? "disp-block" : "disp-none";
            setQueryInput({ ...queryInput, service: e.target.value });
          }}
        >
          <option value="">Select Service</option>
          {selection.services.map((service, i) => (
            <option value={service.service} key={i}>
              {service.title}
            </option>
          ))}
        </select>

        <input
          type="text"
          id="other"
          name="otherservice"
          className="disp-none"
          placeholder="Please specify other service"
          ref={inputOtherService}
        />

        <input
          type="date"
          id="date"
          name="date"
          placeholder="Date Service Needed"
          required
          value={queryInput.date || ""}
          min={nextDayDate()}
          onChange={e => {
            setQueryInput({
              ...queryInput,
              date: e.target.value
            }); /* set current date string from datepicker */
            const selected = prices.common.periods.find(
              p => p.hour === +selection.period
            ); /* get {price, period} object of selected period */
            var tp =
              selected.price +
              (isExpress(e.target.value, prices.common.expressPeriod)
                ? prices.common.expressFee
                : 0); /*  total price = sum of priod of selected period + express fee (if less than 7 days)*/
            setTotalPrice(tp); /* set total price */
          }}
        />
        <p>
          {isExpress(queryInput.date, prices.common.expressPeriod) ? (
            <i className="mt-0">
              Express service selected (RM{prices.common.expressFee}.00)
            </i>
          ) : null}
        </p>

        <p style={{ marginBottom: 0 }}>Period: </p>
        <div
          onChange={e => {
            const period =
              e.target
                .value; /* current select hour: '3','4' or '5' (string) (hours) */
            setSelection({
              ...selection,
              period
            }); /* update period to state selection, {services,areas,period}  */

            const selected = prices.common.periods.find(
              p => p.hour === +period
            ); /* get selected {price,period} of current period */
            setTotalPrice(
              selected.price +
                (isExpress(queryInput.date, prices.common.expressPeriod)
                  ? prices.common.expressFee
                  : 0)
            );
          }} /* update total price = period price + express fee (if less than 7 days) */
          value={period} /* value sync with onChange */
        >
          {prices.common.periods.map((p, i /* loop prices.js object */) => (
            <div>
              <input
                type="radio"
                id={"period" + p.hour}
                name="period"
                value={p.hour}
                defaultChecked={i === 0}
                required
              />
              <label htmlFor={"period" + p.hour}>
                {p.hour + " Hours Services: Rm" + p.price + ".00"}
              </label>
            </div>
          ))}
        </div>

        <select
          id="enq-service"
          name="time"
          required
          value={queryInput.time || ""}
          onChange={e => setQueryInput({ ...queryInput, time: e.target.value })}
          className="dropdown"
        >
          <option value="">Select time period</option>
          {[...new Array(services.hourEnd - services.hourStart + 1)].map(
            (_, i) => (
              <React.Fragment>
                {i > 0 ? (
                  <option key={i - 0.5}>
                    {h24To12(services.hourStart + i - 1, 30)} -{" "}
                    {h24To12(
                      services.hourStart + i - 1 + +selection.period,
                      30
                    ) +
                      " (" +
                      selection.period +
                      " hours)"}
                  </option>
                ) : null}
                <option key={i}>
                  {h24To12(services.hourStart + i, 0)} -{" "}
                  {h24To12(services.hourStart + i + +selection.period, 0) +
                    " (" +
                    selection.period +
                    " hours)"}
                </option>
              </React.Fragment>
            )
          )}
        </select>

        <select
          id="enq-area"
          name="area"
          required
          value={queryInput.area || ""}
          onChange={e => setQueryInput({ ...queryInput, area: e.target.value })}
          className="dropdown"
        >
          <option value="">Select Area</option>
          {selection.areas.map((area, i) => (
            <option value={area.name} disabled={!area.select} key={i}>
              {area.name}
            </option>
          ))}
        </select>
        
        {/* Temperary remove autocomplete due to page error from production */}
        {/* <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgMtwTndB-h2263JpeNlXD20kCO2W1eSQ&libraries=places&callback=initGogleMapsPlacesAutocomplete"
          onLoad={initGoogleMapsPlaces}
        /> */}

        <textarea
          id="pickup"
          className="autocomplete-places"
          name="pickup"
          placeholder="Pickup Location (please specify if different from home address)"
        ></textarea>
        <textarea
          id="visit"
          className="autocomplete-places"
          name="visit"
          placeholder="Visit Location"
          required
        ></textarea>

        <input type="hidden" name="price" value={"RM" + totalPrice + ".00"} />
        <h2>Total Price: RM{totalPrice}.00</h2>
        <input type="submit" value="Order" />
      </form>
    </section>

    {showLoader ? (
      <div className="full-screen-loader">
        <img src="../static/img/loader-80.png" />
        <p>Please wait ...</p>
      </div>
    ) : null}
  </Layout>
);
}

export default Order