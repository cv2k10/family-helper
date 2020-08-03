import Head from "next/head";
import React, {useEffect} from "react";
import Router from 'next/router'; 
import Link from "next/link";
import HeaderWithBg from "../components/HeaderWithBg";
import Layout from "../components/Layout";
import "../scss/fonts.scss";
import "../scss/style.scss";
import "../scss/page.scss";

// redirect to signin page if not login,
// else redirect to OrderPage page
const OrderService = (props) => {
  useEffect(() => {
    console.log(props.user);
    if(!props.user) Router.push('/signin');
    else Router.push('/OrderForm');

  }, []);

  return (
    <div>
    </div>
  );
};

export default OrderService;
