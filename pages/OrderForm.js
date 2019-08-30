import 'isomorphic-fetch';
import Head from 'next/head';
import Router from 'next/router';
import React, { Component } from 'react';
import services from '../components/items.js';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";



class Order extends Component {
  constructor(props) {
    super(props);
    this.inputHealthStatus = React.createRef();
    this.inputOtherService = React.createRef();
    this.state = {
      submitted: false,
      areas: ['Cheras', 'Ampang', 'Sri Petaling', 'Kuchai Lama', 'Petaling Jaya', 'Subang Jaya', 'Damansara', 'Kepong', 'Wangsa Maju', 'Kajang', 'Serdang', 'Puchong', 'Brickfield', 'Mont Kiara', 'Shah Alam', 'Klang', 'Kota Kemumting', 'Putrajaya', 'Bangi', 'Selayang'],

      services: services.items
    }
  }

  submitForm(formData) {

    const data = {
      form: {
        fullname: formData.fullname.value,
        email: formData.email.value,
        gender: formData.gender.gender,        
        age: formData.age.value,
        health: formData.health.value,
        healthstatus: formData.healthstatus.value,
        phone: formData.phone.value,
        fulladdress: formData.fulladdress.gender,
        urgent: formData.urgent.value,
        service: formData.service.value,
        otherservice: formData.otherservice.value,
        date: formData.date.value,
        timefrom: formData.timefrom.value,
        price: formData.price.gender,
        area: formData.area.value,
        pickup: formData.pickup.value,
        visit: formData.visit.value,
      }
    }

    console.log(JSON.stringify(data, null, 2));

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


  render() {
    const title = 'Contact Page'
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
            this.submitForm(e.target)
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
              onChange={()=>this.inputHealthStatus.current.className = 'disp-none'} 
              />
                <label htmlFor="health-good">Good</label>
            </span>
            <span style={{flex: 1}}>              
                <input type="radio" id="health-poor" name="health" value="poor" 
                onChange={()=>this.inputHealthStatus.current.className = 'disp-block'}  
                />
              <label htmlFor="health-poor">Poor</label>
            </span>

            <input type="text" id="healthstatus" name="healthstatus" placeholder="Elaborate health status" className="disp-none"
            ref={this.inputHealthStatus}
            />

            <input type="text" id="phone" name="phone" placeholder="Phone Contact" required/>

            <textarea id="fulladdress" name="fulladdress" placeholder="Full Address"></textarea>

            <input type="text" id="urgent" name="urgent" placeholder="Urgent Phone Contact" required/>
            
            <div className="form-title">Service Details</div>

            <select id="enq-service" name="service" data-default-value="" className="dropdown"
            onChange={(e)=>this.inputOtherService.current.className = e.target.value==='OtherService'? 'disp-block': 'disp-none'}
            >
              <option value="">Select Service</option>
              {this.state.services.map((service, i) => (
                <option value={service.service} key={i}>{service.title}</option>
              ))}
            </select>
            <input type="text" id="other" name="otherservice" placeholder="Please specify other service" 
            ref={this.inputOtherService}
            />

            <input type="date" id="date" name="date" placeholder="Date" />

            <input type="time" id="time-from" name="timefrom" placeholder="Start Time" />

            <p style={{marginBottom: 0}}>Price: </p>
            <div style={{flex: 1}}>
              <input type="radio" id="price1" name="price" value="price1" defaultChecked />
                <label htmlFor="price1">3 Hours Services: Rm150.00</label>
            </div>
            <div style={{flex: 1}}>              
                <input type="radio" id="price2" name="price" value="price2" />
              <label htmlFor="price2">4 Hours Services: Rm175.00</label>
            </div>
            <div style={{flex: 1}}>              
                <input type="radio" id="price3" name="price" value="price3" />
              <label htmlFor="price3">5 Hours Services: Rm195.00</label>
            </div>

            <select id="enq-service" name="area" data-default-value="" className="dropdown">
              <option value="">Select Area</option>
              {this.state.areas.map((area, i) => (
                <option value={area} key={i}>{area}</option>
              ))}
            </select>
            <textarea id="pickup" name="pickup" placeholder="Pickup Location"></textarea>
            <textarea id="visit" name="visit" placeholder="Visit Location"></textarea>

            <input type="submit" value="Order" />
          </form>
        </section>
      </Layout>
    )
  }
}

export default Order