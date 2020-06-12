import 'isomorphic-fetch';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";


const Order = (props) => {
  const initAreaKV = {
      submitted: false,
      areas: ['Cheras', 'Ampang', 'Sri Petaling', 'Kuchai Lama', 'Petaling Jaya', 'Subang Jaya', 'Damansara', 'Kepong', 'Wangsa Maju', 'Kajang', 'Serdang', 'Puchong', 'Brickfield', 'Mont Kiara', 'Shah Alam', 'Klang', 'Kota Kemumting', 'Putrajaya', 'Bangi', 'Selayang']
    };
  const [areaKV, setAreaKV] = useState(initAreaKV);

  const submitForm = (formData) => {
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
      res.status === 200 ? setAreaKV({ ...areaKV, submitted: true }) : ''
    })
  }

  return (
    <Layout pageProps={props}>
      <Head>
        <title>Contact Page</title>
      </Head>

      <section className="enquiry section">
        <div className="enq-header">Order our service now!</div>
        <form className="enq-form">
          <select id="enq-service" name="service" data-default-value="" className="dropdown">
            <option value="">Select Area</option>
            {areaKV.areas.map((area, i) => (
              <option value={area} key={i}>{area}</option>
            ))}
          </select>
          <input type="text" id="addr-from" name="addr-from" placeholder="FROM" />
          <input type="text" id="addr-to" name="addr-to" placeholder="TO" />
          <input type="text" id="date" name="date" placeholder="DATE" />
          <input type="text" id="time" name="time" placeholder="TIME" />
          <input type="submit" value="Instant Quotation" />
        </form>
      </section>

      <div id='container' className='contact'>
        <form className="board-form" onSubmit={e => {
          e.preventDefault()
          this.submitForm(e.target)
        }}>
          <h2>Contact</h2>
          <div className="f fw grid-row--s">
            <div className="mb1 pb05">
              <input type="text" name="name"  required />
            </div>
            <div className="mb1 pb05">
              <input type="email" name="email" required />
            </div>
            <div className="mb1 pb05">
              <input type="submit" value="Send" />
            </div>              
          </div>
        </form>
        </div>
    </Layout>
  )
}

export default Order