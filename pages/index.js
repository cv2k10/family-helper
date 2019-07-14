import NavBar from '../components/NavBar';
import Head from 'next/head'
import "../scss/style.scss"

const Index = () => (
  <section>
    <Head>
      <title>Home</title>
    </Head>
    <NavBar />
    <h1>Hellow World from Next JS</h1>
  </section>
);

export default Index; 