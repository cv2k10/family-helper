import Link from 'next/link';
import HeaderWithBg from "../components/HeaderWithBg";

const Signin = ({redirect}) => {
  return (
    <div className="container">
      <HeaderWithBg title="Sign in" bgimg="/static/img/bg.jpg"></HeaderWithBg>
      <h2>Sign In to Family Helper</h2>
      <section className="content">
        <div className="btn-full fb-btn">
          <Link
            href={"/auth/facebook?redirect=" + encodeURIComponent(`/${redirect}`)}
          >
            <a>Continue With Facebook</a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Signin;