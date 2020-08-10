import Head from "next/head";
import React from "react";
import Link from "next/link";
import HeaderWithBg from "../components/HeaderWithBg";
import Layout from "../components/Layout";
import "../scss/fonts.scss";
import "../scss/page.scss";
import "../scss/style.scss";

import MenuItem from "../components/MenuItem";

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

const HowItWorks = (props) => {
  return (
    <div>
      <Head>
        <title>User Menu</title>
      </Head>
      <Layout pageProps={props}>
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
      </Layout>
    </div>
  );
};

export default HowItWorks;
