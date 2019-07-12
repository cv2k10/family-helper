import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>
        <title>Next JS Awesome kit 1</title>
        
        <link rel="stylesheet" href=".next/static/css/style.css" />
      </Head>
      <Main />
      <NextScript />
    </Html>
    );
  }
}