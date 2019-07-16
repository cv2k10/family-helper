import Head from 'next/head';
import NavBar from '../components/NavBar';
import "../scss/style.scss";

const Index = () => (
  <section>
    <Head>
      <title>Family Helper - Home</title>
    </Head>
    <NavBar />
    <h1>Hello World from Next JS</h1>
  </section>
);

export default Index; 