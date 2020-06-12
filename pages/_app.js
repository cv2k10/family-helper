// import "../styles/custom.css";

import { createStore, applyMiddleware, compose } from "redux";
import allReducer from "../redux/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);   
  }

  if (ctx.req) {
    if (ctx.req.user) { // if auth user exists (fr passport-facebook), add props.user (on ssr, server side rendering)
      pageProps = { ...pageProps, user: ctx.req.user };
    }
  }   

  return { pageProps };
};



export default MyApp;