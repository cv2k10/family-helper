import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
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
        <p>Message sent to Family Helper</p>
        <h2 className="font-weight-100 text-center">Thank you</h2>

        <p>Thank you for your enquiry! We will be in touch as soon as possible. In the meantime, use <Link href="/FrequentlyAskQuestions"><a>FAQ</a></Link> page for quick answers to your questions.</p>
        <p>The Family Helper Team</p>
      </section>
    </Layout>
  );
}

export default MessageCompleted;