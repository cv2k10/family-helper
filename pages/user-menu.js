import Head from "next/head";
import React, {useEffect} from "react";
import Link from "next/link";
import HeaderWithBg from "../components/HeaderWithBg";
import Signin from '../components/Signin';

import Router, { useRouter } from "next/router";
import Layout from "../components/Layout";

import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

import MenuItem from "../components/MenuItem";

import { useSelector, useDispatch } from "react-redux";

const MenuList = [
  {
    href: "/user-profile",
    title: "Your Profile",
    style: "normal",
  },
  {
    href: "/user-orders",
    title: "Your Orders",
    style: "normal",
  },
  {
    href: "/auth/logout",
    title: "Sign Out",
    style: "normal",
  }
];

const Menu = () => {
  return (
    <section className="content">
      <div className="user-nav">
        <ul className="smenu">
          {MenuList.map((list, i) => (
            <MenuItem
              href={i}
              href={list.href}
              title={list.title}
              textStyle={list.style}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

const UserMenu = (props) => {
  const authFb = useSelector((state) => state.authFb);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>User Menu</title>
      </Head>
      <Layout pageProps={props}>
        {props.user || authFb.isAuth ? <Menu /> : <Signin redirect="user-menu" /> }
      </Layout>
    </div>
  );
};

export default UserMenu;
