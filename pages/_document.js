import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>
        <title>Next JS Awesome kit 1</title>
      </Head>
      <Main />
      <NextScript />
    </Html>
    );
  }
}