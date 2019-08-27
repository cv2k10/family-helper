import 'isomorphic-fetch';
import Head from 'next/head';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";


class Order extends Component {
  constructor(props) {
    super(props);
    this.inputHealthStatus = React.createRef();
    this.state = {
      submitted: false,
      areas: ['Cheras', 'Ampang', 'Sri Petaling', 'Kuchai Lama', 'Petaling Jaya', 'Subang Jaya', 'Damansara', 'Kepong', 'Wangsa Maju', 'Kajang', 'Serdang', 'Puchong', 'Brickfield', 'Mont Kiara', 'Shah Alam', 'Klang', 'Kota Kemumting', 'Putrajaya', 'Bangi', 'Selayang']
    }
  }

  submitForm(formData) {

    const data = {
      form: {
        name: formData.name.value,
        email: formData.email.value        
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
      res.status === 200 ? this.setState({ submitted: true }) : ''
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

            <select id="enq-service" name="service" data-default-value="" className="dropdown">
              <option value="">Select Service</option>
              {this.state.areas.map((area, i) => (
                <option value={area} key={i}>{area}</option>
              ))}
            </select>
            <input type="text" id="other" name="other" placeholder="Other Service" disabled="disabled" />

            <input type="date" id="date" name="date" placeholder="Date " />

            <input type="time" id="time-from" name="timefrom" placeholder="From " />
            <input type="time" id="time-to" name="timeto" placeholder="To " />

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

            <select id="enq-service" name="service" data-default-value="" className="dropdown">
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