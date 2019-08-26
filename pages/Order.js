import 'isomorphic-fetch';
import Head from 'next/head';
import React, { Component } from 'react';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";


class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting: false,
      submitted: false
    }
  }

  submitForm(formData) {

    console.log("data: " + formData.name.value)
    console.log("data: " + formData.email.value)

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
}

export default Order