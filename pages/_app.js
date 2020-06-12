// import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);   
  }

  if (ctx.req) {
    if (ctx.req.user) { // if auth user exist, add props.user (on ssr)
      pageProps = { ...pageProps, user: ctx.req.user };
    }
  }   

  return { pageProps };
};

export default MyApp;
