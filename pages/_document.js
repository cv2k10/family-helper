import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>       
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="stylesheet" href=".next/static/css/style.css" />
      </Head>
      <Main />
      <NextScript />
    </Html>
    );
  }
}