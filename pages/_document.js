import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>       
        <link rel="stylesheet" href=".next/static/css/style.css" />
      </Head>
      <Main />
      <NextScript />
    </Html>
    );
  }
}