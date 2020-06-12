import Link from 'next/link';
import React from 'react';

import UserProfile from './UserProfile';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  setAuthFb
} from "../redux/actions";

const Layout = ({pageProps, children}) => {
  const authFb = useSelector(state => state.authFb);
  const dispatch = useDispatch();

  useEffect(() => { // set props.user to redux state, authFb on react render (csr, client side rendering)
    if(pageProps.user) dispatch(setAuthFb({ isAuth: true, ...pageProps.user }));
  }, []);

  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const onClickMenuBurger = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  }

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <div id="menu-burger" onClick={() => onClickMenuBurger()}>
            <div
              className={
                burgerMenuOpen ? "burger burger-cross" : "burger"
              }
            ></div>
          </div>
          <svg
            className="logo"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 210 210"
            style={{ fill: "#000000" }}
          >
            <g
              fill="none"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <path d="M0,210v-210h210v210z" fill="none"></path>
              <g fill="#3498db">
                <g id="surface1">
                  <path d="M105,8.4c-0.73828,0 -1.47656,0.19688 -2.13281,0.59062l-60.86719,35.78203v9.76172l63,-37.06172l63,37.06172v-9.76172l-60.86719,-35.78203c-0.65625,-0.39375 -1.39453,-0.59062 -2.13281,-0.59062zM105,27.21797l-50.4,29.64609v56.53594c0,2.32969 1.87031,4.2 4.2,4.2h92.4c2.32969,0 4.2,-1.87031 4.2,-4.2v-56.53594zM21,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v50.4c0,12.6 3.92109,16.12734 8.4,21c0,0 25.06875,32.17266 29.4,37.8v8.4c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-16.8c0,-15.45469 -7.67812,-26.75859 -16.5375,-35.66719l-20.13047,-21.47578c-7.69453,-7.69453 -13.60078,-2.67422 -14.74922,-1.46016c-3.78984,3.97031 -3.80625,10.15547 -0.06562,14.06016l20.13047,21.39375c1.34531,1.41094 1.34531,3.69141 0,5.10234c-0.65625,0.70547 -1.54219,1.05 -2.42813,1.05c-0.86953,0 -1.75547,-0.34453 -2.42813,-1.05l-18.44063,-19.70391c-12.55078,-12.64922 -4.15078,-25.24922 0.04922,-25.24922v-37.8c0,-8.4 -5.85703,-12.6 -12.6,-12.6zM189,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v37.8c4.2,0 12.6,12.6 0.04922,25.24922l-18.44063,19.70391c-0.67266,0.70547 -1.55859,1.05 -2.42812,1.05c-0.88594,0 -1.77187,-0.34453 -2.42812,-1.05c-1.34531,-1.41094 -1.34531,-3.69141 0,-5.10234l20.14687,-21.39375c3.72422,-3.90469 3.70781,-10.08984 -0.06563,-14.06016c-1.16484,-1.21406 -7.07109,-6.23437 -14.76562,1.46016l-20.13047,21.47578c-8.85937,8.90859 -16.5375,20.2125 -16.5375,35.66719v16.8c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-8.4c4.33125,-5.62734 29.4,-37.8 29.4,-37.8c4.47891,-4.87266 8.4,-8.4 8.4,-21v-50.4c0,-8.4 -5.85703,-12.6 -12.6,-12.6z"></path>
                </g>
              </g>
            </g>
          </svg>
          <h1 className="logo-title">Family Helper</h1>
        </div>

        <div className="header-right">
          <img
            className="search"
            src="https://img.icons8.com/ios/50/000000/search-filled.png"
          />
          <UserProfile />          
        </div>
      </header>

      <section
        id="menu-mobile"
        className={burgerMenuOpen ? "display-on" : null}
      >
        <div
          className="overlay"
          onClick={() => setBurgerMenuOpen(false)}
        ></div>
        <div className="sidebar-nav">
          <ul className="smenu">
            <Link href={"/"}>
              <li className="sitem">
                <a className="stitle">Home</a>
              </li>
            </Link>
            <Link href={"/OrderForm"}>
              <li className="sitem">
                <a className="stitle">
                  <strong>Order our service now!</strong>
                </a>
              </li>
            </Link>
            <Link href={"/WhatIsFamilyHelper"}>
              <li className="sitem">
                <a className="stitle">What is Family Helper</a>
              </li>
            </Link>
            <Link href={"/HowWeHelpYou"}>
              <li className="sitem">
                <a className="stitle">How We Could Help You</a>
              </li>
            </Link>
            <Link href={"/ExcellentCompanionshipServices"}>
              <li className="sitem">
                <a className="stitle">Excellent Companionship Services</a>
              </li>
            </Link>
            <Link href={"/HowItWorks"}>
              <li className="sitem">
                <a className="stitle">How It Works</a>
              </li>
            </Link>
            <Link href={"/WhyFamilyHelper"}>
              <li className="sitem">
                <a className="stitle">Why Family Helper</a>
              </li>
            </Link>
            <Link href={"/CustomerComments"}>
              <li className="sitem">
                <a className="stitle">Customer Comments About Our Services</a>
              </li>
            </Link>
            <Link href={"/Pricing"}>
              <li className="sitem">
                <a className="stitle">Pricing</a>
              </li>
            </Link>

            <Link href={"/ContactUs"}>
              <li className="sitem">
                <a className="stitle">Contact Us</a>
              </li>
            </Link>
            <Link href={"/AboutUs"}>
              <li className="sitem">
                <a className="stitle">About Us</a>
              </li>
            </Link>
            <Link href={"/FrequentlyAskQuestions"}>
              <li className="sitem">
                <a className="stitle">FAQ</a>
              </li>
            </Link>
            <Link href={"/TermsAndConditions"}>
              <li className="sitem">
                <a className="stitle">Terms And Conditions</a>
              </li>
            </Link>
          </ul>
        </div>
      </section>

      {children}

      <section className="footer">
        <div className="copyright">© 2019 Family Helper Sdn Bhd</div>
        <div className="info">
          Family Helper® The safer way to take care of your elderly™
        </div>
      </section>
    </div>
  )
  }

export default Layout;