import "isomorphic-fetch";
import Head from 'next/head';
import Link from 'next/link';
import Router, { useRouter } from "next/router";
import HeaderWithBg from '../components/HeaderWithBg';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

import moment from 'moment';

const ContactUs = (props) => {
  const submitForm = (formData) => {
    /* onSubmit event with input param, e.target (form) */

    const data = {
      form: {
        created: moment().format(),
        fullname: formData.fullname.value,
        email: formData.email.value,
        phone: formData.phone.value,
        message: formData.message.value
      },
    };

    fetch("/api/message", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        // res.status === 200 ? this.setState({ submitted: true }) : ''
        if (res.status === 200) {
          Router.push({
            pathname: "/MessageCompleted",
            query: data.form,
          });
        } else throw new Error("Error: response status is " + res.status);
      })
      .catch((e) => {
        console.error(e.message);
      });
  };  

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout pageProps={props}>
        <div className="container">
          <HeaderWithBg
            title="Contact Us"
            bgimg="/static/img/bg.jpg"
          ></HeaderWithBg>
          <h2>Enquiries / Contact Us</h2>
          <section
            className="content"
            style={{ border: "none", marginBottom: 0 }}
          >
            <p>
              Send your message via our contact form, we will reply you as soon
              as possible.
            </p>
            <p>
              Office phone:{" "}
              <Link href="tel:603926778753">
                <a style={{ color: "#4299e1" }}>603-92677 8753</a>
              </Link>
            </p>
            <p>
              Mobile:{" "}
              <Link href="tel:60192791168">
                <a style={{ color: "#4299e1" }} href="tel:60192791168">
                  6019-279 1168
                </a>
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link href="tel:60192791168">
                <a
                  style={{ color: "#4299e1" }}
                  href="mailto:admin@familyhelper.simplytechinfo.com"
                >
                  admin@familyhelper.simplytechinfo.com
                </a>
              </Link>
            </p>

            <p>
              Monday To Saturday: 9am - 6pm
              <br />
              Sunday and Public holiday: 11am - 3am
            </p>
            <p>
              Refer to our{" "}
              <Link href="/FrequentlyAskQuestions">
                <a style={{ textDecoration: "underline", color: "#4299e1" }}>
                  FAQ
                </a>
              </Link>{" "}
              now, it give you fast and accurate answer.
            </p>
          </section>

          <section
            className="enquiry section"
            style={{ border: "none", marginTop: 0, paddingTop: 0 }}
          >
            <div className="form-title">Contact Form</div>
            <form
              className="enq-form"
              onSubmit={(e) => {
                e.preventDefault();
                {
                  /* setShowLoader(true); */
                }
                submitForm(e.target);
              }}
            >
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full name"
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Phone number"
                required
              />

              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default ContactUs; 