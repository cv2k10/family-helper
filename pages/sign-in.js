import Head from "next/head";
import Link from 'next/link';
import HeaderWithBg from "../components/HeaderWithBg";
import Layout from "../components/Layout";
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

const Signin = (props) => {
  return (
    <div>
      <Head>
        <title>Sign in</title>
      </Head>
      <Layout pageProps={props}>
        <div className="container">
          <HeaderWithBg
            title="Sign in"
            bgimg="/static/img/bg.jpg"
          ></HeaderWithBg>
          <h2>Sign In to Family Helper</h2>
          <section className="content">
            <div className="btn-full fb-btn">
              <Link
                href={
                  "/auth/facebook?redirect=" +
                  encodeURIComponent(`/${redirect}`)
                }
              >
                <a>Continue With Facebook</a>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Signin;