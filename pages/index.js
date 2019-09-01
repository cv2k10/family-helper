import Head from 'next/head';
import Router from 'next/router';
import React from 'react';
import services from '../components/items.js';
import areas from '../components/areas.js';
import Layout from '../components/Layout';
import "../scss/fonts.scss";
import "../scss/style.scss";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,    
      services: services.items,
      areas: areas.klangValley,
    } 
  }

  componentDidMount() {
    this.sliderControl();
    setInterval(()=>this.sliderControl(), 5000);
  }

  sliderControl() {
    var slides = document.querySelectorAll('.main-slider img.slide');
  
    this.state.currentSlide < slides.length - 1 ? this.setState({currentSlide: this.state.currentSlide + 1}) : this.setState({currentSlide: 0});
}

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Layout>    
        
        <div id="main-centent">
            <section className="main-slider">
                <div className="slides">
                    <span className="overlay">
                        <div className="frames">
                          <img className={this.state.currentSlide===0? "slide current": "slide"} src="./static/img/care-giver1.jpg" />
                          <img className={this.state.currentSlide===1 ? "slide current" : "slide"} src="./static/img/care-giver2.jpg" />
                          <img className={this.state.currentSlide===2 ? "slide current" : "slide"} src="./static/img/care-giver3.jpg" />
                        </div>
                    </span>
                </div>
                <div className="slider-cta">
                    <h1 className="cta-title">The Safe Way to Take Care Your Elderly</h1>
                    <div className="cta-text">Companion Care. Safety First. Trained Workers</div>
                    <a className="cta-btn">Book Our Services Within Minutes, from RM145 only</a>
                    <div className="cta-pro">or <a href="#" className="cta-pro-link">Join as a Pro</a></div>
                </div>                
            </section>
            <section className="card">
                <div className="title header-1">Find the helps you've always wanted</div>
                <div className="item">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 192 192"
style={{fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#888888"><g id="surface1"><path d="M96,7.68c-0.675,0 -1.35,0.18 -1.95,0.54l-55.65,32.715v8.925l11.52,-6.78v60.6c0,2.115 1.725,3.84 3.84,3.84h84.48c2.115,0 3.84,-1.725 3.84,-3.84v-60.6l11.52,6.78v-8.925l-55.65,-32.715c-0.6,-0.36 -1.275,-0.54 -1.95,-0.54zM96,15.975l38.4,22.59v61.275h-76.8v-61.275zM19.2,61.44c-3.195,0 -5.955,1.485 -7.995,3.525c-2.04,2.04 -3.525,4.8 -3.525,7.995v50.19c0,7.17 0.81,11.7 2.49,15.21c1.695,3.51 4.005,5.52 6.12,7.845c4.23,5.04 30.69,36.735 30.69,36.735c0.72,0.87 1.8,1.38 2.94,1.38c1.59,0.015 3.045,-0.96 3.615,-2.445c0.585,-1.485 0.18,-3.18 -0.99,-4.245c-0.555,-0.66 -26.34,-31.56 -30.48,-36.48c-0.03,-0.045 -0.075,-0.075 -0.105,-0.12c-2.385,-2.625 -3.885,-3.96 -4.86,-6.015c-0.99,-2.04 -1.74,-5.28 -1.74,-11.865v-50.19c0,-0.645 0.435,-1.725 1.275,-2.565c0.84,-0.84 1.92,-1.275 2.565,-1.275c0.645,0 1.725,0.435 2.565,1.275c0.84,0.84 1.275,1.92 1.275,2.565v46.08c0,1.02 0.405,1.995 1.125,2.715l3.765,3.765c0.225,2.91 1.725,5.565 3.915,7.755c1.2,1.2 15.12,14.94 23.01,23.01c0.96,1.005 2.37,1.425 3.72,1.08c1.35,-0.33 2.415,-1.365 2.775,-2.7c0.36,-1.35 -0.015,-2.775 -1.005,-3.75c-7.995,-8.175 -22.17,-22.17 -23.07,-23.07c-1.47,-1.47 -1.755,-2.4 -1.755,-3.045c0,-0.645 0.285,-1.575 1.755,-3.045c1.47,-1.47 2.4,-1.755 3.045,-1.755c0.645,0 1.575,0.285 3.045,1.755c1.77,1.77 21.12,21.075 23.01,23.01c0.015,0.015 0.045,0.045 0.06,0.06c7.695,7.53 10.365,14.445 10.365,27.975v7.68c-0.015,1.38 0.705,2.67 1.905,3.375c1.2,0.69 2.67,0.69 3.87,0c1.2,-0.705 1.92,-1.995 1.905,-3.375v-7.68c0,-14.7 -3.78,-24.765 -12.675,-33.465c-2.34,-2.385 -21.285,-21.285 -23.01,-23.01c-2.37,-2.37 -5.28,-4.005 -8.475,-4.005c-3.195,0 -6.105,1.635 -8.475,4.005c-0.375,0.375 -0.705,0.795 -1.035,1.215l-0.09,-0.09v-44.49c0,-3.195 -1.485,-5.955 -3.525,-7.995c-2.04,-2.04 -4.8,-3.525 -7.995,-3.525zM172.8,61.44c-3.195,0 -5.955,1.485 -7.995,3.525c-2.04,2.04 -3.525,4.8 -3.525,7.995v44.49l-0.075,0.09c-0.345,-0.42 -0.675,-0.84 -1.05,-1.215c-2.37,-2.37 -5.28,-4.005 -8.475,-4.005c-3.195,0 -6.105,1.635 -8.475,4.005c-1.725,1.725 -20.67,20.625 -23.01,23.01c-8.895,8.7 -12.675,18.765 -12.675,33.465v7.68c-0.015,1.38 0.705,2.67 1.905,3.375c1.2,0.69 2.67,0.69 3.87,0c1.2,-0.705 1.92,-1.995 1.905,-3.375v-7.68c0,-13.53 2.67,-20.445 10.365,-27.975c0.015,-0.015 0.045,-0.045 0.06,-0.06c1.89,-1.935 21.24,-21.24 23.01,-23.01c1.47,-1.47 2.4,-1.755 3.045,-1.755c0.645,0 1.575,0.285 3.045,1.755c1.47,1.47 1.755,2.4 1.755,3.045c0,0.645 -0.285,1.575 -1.755,3.045c-0.9,0.9 -15.075,14.895 -23.07,23.07c-0.99,0.975 -1.365,2.4 -1.005,3.75c0.36,1.335 1.425,2.37 2.775,2.7c1.35,0.345 2.76,-0.075 3.72,-1.08c7.89,-8.07 21.81,-21.81 23.01,-23.01c2.19,-2.19 3.69,-4.845 3.915,-7.755l3.765,-3.765c0.72,-0.72 1.125,-1.695 1.125,-2.715v-46.08c0,-0.645 0.435,-1.725 1.275,-2.565c0.84,-0.84 1.92,-1.275 2.565,-1.275c0.645,0 1.725,0.435 2.565,1.275c0.84,0.84 1.275,1.92 1.275,2.565v50.19c0,6.585 -0.75,9.825 -1.74,11.865c-0.975,2.055 -2.475,3.39 -4.86,6.015c-0.03,0.045 -0.075,0.075 -0.105,0.12c-4.185,4.98 -30.795,36.87 -30.795,36.87c-0.96,1.14 -1.17,2.73 -0.54,4.08c0.63,1.35 1.995,2.22 3.48,2.22c1.35,0.015 2.61,-0.675 3.315,-1.815c0.615,-0.75 26.13,-31.32 30.33,-36.3c2.1,-2.325 4.41,-4.335 6.09,-7.845c1.695,-3.51 2.505,-8.04 2.505,-15.21v-50.19c0,-3.195 -1.485,-5.955 -3.525,-7.995c-2.04,-2.04 -4.8,-3.525 -7.995,-3.525z"></path></g></g></g></svg>
                    <div className="text-bold">Get helpers from us</div>
                    <div className="text-xl">Trusted quality assurance services</div>
                </div>
                
                <div className="item">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 192 192" style={{fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#888888"><g id="surface1"><path d="M103.68,23.04c-16.395,0 -28.98,6.75 -35.97,16.68c-1.62,2.295 -2.925,4.77 -3.915,7.335l-2.355,-4.815h-2.4c-13.38,0 -23.295,5.415 -28.5,13.455c-4.755,7.35 -5.055,16.545 -2.1,25.14c-1.275,1.755 -2.22,3.945 -1.86,7.02c0.405,3.465 1.32,6.03 2.76,7.92c0.63,0.84 1.56,0.87 2.355,1.38c0.51,2.805 1.26,5.61 2.4,7.935c0.69,1.41 1.425,2.67 2.205,3.765c0.255,0.345 0.69,0.585 0.93,0.885c0.03,3.06 0.06,5.715 -0.18,8.88c-0.705,1.725 -2.43,3.33 -5.64,4.95c-3.33,1.68 -7.8,3.225 -12.33,5.22c-4.53,1.995 -9.21,4.44 -12.9,8.37c-3.705,3.945 -6.18,9.48 -6.18,16.44v3.84h27.78c-0.555,2.385 -0.9,4.935 -0.9,7.68v3.84h138.24v-3.84c0,-2.745 -0.33,-5.295 -0.9,-7.68h28.02l-0.24,-4.065c-0.42,-6.975 -3.21,-12.435 -7.08,-16.32c-3.87,-3.87 -8.655,-6.3 -13.26,-8.25c-4.62,-1.965 -9.105,-3.48 -12.45,-5.145c-3.21,-1.59 -4.905,-3.15 -5.61,-4.845v-8.655c0.27,-0.3 0.66,-0.51 0.945,-0.84c0.87,-1.05 1.755,-2.295 2.595,-3.705c1.335,-2.25 2.235,-5.07 2.88,-7.92c0.645,-0.42 0.945,-0.435 1.74,-1.305c1.545,-1.68 3.09,-4.44 3.54,-8.19c0.375,-3.24 -0.705,-5.415 -1.74,-6.9c0.78,-1.905 1.74,-3.675 1.965,-5.985c0.33,-3.555 0.12,-7.53 -0.885,-11.43c-1.02,-3.9 -2.82,-7.755 -5.88,-10.77c-2.475,-2.43 -5.985,-3.87 -9.915,-4.455l-2.865,-6.42h-2.49c-5.58,0 -11.235,0.72 -16.53,2.445c-1.29,-2.895 -2.955,-5.61 -5.175,-7.905c-2.925,-3 -7.02,-4.86 -11.61,-5.505l-4.125,-8.235zM101.415,30.96l3.735,7.44h2.37c3.78,0 6.435,1.365 8.745,3.735c2.31,2.37 4.11,5.865 5.19,9.72c1.095,3.855 1.5,8.025 1.29,11.505c-0.225,3.48 -1.23,6.285 -1.86,7.095l-2.115,2.73l2.46,2.385c0,0 1.77,1.995 1.53,4.005c-0.36,3.075 -1.455,4.665 -2.355,5.64c-0.9,0.975 -1.335,1.095 -1.335,1.095l-2.115,0.87l-0.24,2.28c-0.285,2.73 -1.74,6.51 -3.45,9.54c-0.855,1.515 -1.755,2.865 -2.52,3.825c-0.765,0.945 -1.605,1.53 -1.185,1.305l-2.04,1.08v12.135c-0.735,0.63 -1.785,1.47 -3.09,2.34c-2.55,1.695 -5.865,3.195 -8.43,3.195c-2.565,0 -5.88,-1.5 -8.43,-3.195c-1.305,-0.87 -2.355,-1.71 -3.09,-2.34v-12.135l-2.04,-1.08c0.42,0.225 -0.435,-0.36 -1.2,-1.305c-0.75,-0.96 -1.65,-2.31 -2.505,-3.825c-1.71,-3.03 -3.165,-6.81 -3.45,-9.54l-0.24,-2.28l-2.115,-0.87c0,0 -0.435,-0.12 -1.335,-1.095c-0.9,-0.975 -1.995,-2.565 -2.355,-5.64v-0.015c-0.24,-2.01 1.515,-3.99 1.515,-3.99l1.935,-1.86l-1.095,-2.445c-4.17,-9.39 -3.075,-19.365 2.385,-27.12c5.16,-7.32 14.4,-12.6 27.435,-13.185zM141.18,50.325l2.445,5.49h2.49c3.39,0 5.505,1.05 7.26,2.79c1.77,1.725 3.075,4.29 3.825,7.2c0.75,2.91 0.93,6.105 0.675,8.775c-0.255,2.655 -1.125,4.815 -1.47,5.265l-2.055,2.7l2.415,2.355c0,0 1.035,1.29 0.9,2.4c-0.255,2.22 -0.99,3.27 -1.56,3.9c-0.585,0.63 -0.705,0.615 -0.705,0.615l-2.085,0.885l-0.24,2.265c-0.195,1.89 -1.275,4.59 -2.535,6.735c-0.645,1.065 -1.32,2.01 -1.875,2.685c-0.555,0.66 -1.17,1.035 -0.72,0.795l-2.025,1.08v9.705c-1.35,1.08 -4.275,3.075 -7.68,3.075h-3.84v11.145c-3.975,-1.695 -7.785,-3.315 -10.92,-4.935c-4.44,-2.31 -7.185,-4.68 -8.28,-7.215v-9c0.465,-0.495 1.095,-0.855 1.56,-1.44c1.08,-1.35 2.16,-2.985 3.195,-4.815c1.755,-3.12 2.985,-6.87 3.72,-10.62c0.795,-0.465 1.245,-0.54 2.34,-1.71c1.89,-2.025 3.81,-5.325 4.365,-9.975c0.45,-3.765 -0.825,-6.33 -2.055,-8.13c1.14,-2.52 1.875,-5.31 2.07,-8.505c0.24,-3.735 -0.105,-7.815 -1.02,-11.85c3.615,-1.065 7.695,-1.485 11.805,-1.665zM56.865,50.355l2.415,4.95h2.4c0.045,0 0.075,0 0.12,0c-0.63,5.505 0.045,11.235 2.085,16.755c-1.29,1.74 -2.745,4.35 -2.265,8.415c0.555,4.65 2.475,7.95 4.365,9.975c1.08,1.17 1.53,1.245 2.325,1.71c0.735,3.75 1.98,7.5 3.735,10.62c1.02,1.83 2.115,3.465 3.195,4.815c0.465,0.585 1.095,0.945 1.56,1.44v9c-1.095,2.55 -3.855,4.92 -8.295,7.245c-3.12,1.62 -6.945,3.24 -10.905,4.935v-11.175h-3.84c-4.785,0 -7.71,-2.04 -8.88,-3.075c0.075,-2.61 0.06,-5.04 0.06,-7.62v-2.31l-2.01,-1.08c0.57,0.315 0.045,0.03 -0.39,-0.6c-0.45,-0.615 -1.02,-1.56 -1.545,-2.64c-1.035,-2.145 -1.95,-4.89 -2.175,-7.035l-0.33,-3.18l-2.925,-0.24c-0.03,-0.03 -0.015,-0.015 -0.105,-0.135c-0.315,-0.405 -0.945,-1.62 -1.245,-4.155c-0.165,-1.365 0.345,-1.935 0.42,-2.01l2.64,-1.665l-1.32,-3.015c-3.135,-7.17 -2.655,-14.7 1.035,-20.4c3.405,-5.265 10.02,-8.925 19.875,-9.525zM43.065,123.825c2.025,1.14 4.665,2.25 7.89,2.67l-0.615,6.99c-1.86,0.885 -3.69,1.875 -5.505,2.925l-4.83,-9.285c1.155,-0.96 2.205,-2.04 3.06,-3.3zM147.645,124.11c0.585,0.87 1.275,1.65 2.04,2.355l-3.24,9.48c-1.59,-0.9 -3.18,-1.74 -4.785,-2.505l-0.615,-6.96c2.58,-0.42 4.815,-1.365 6.6,-2.37zM81.66,124.815c0.585,0.435 0.975,0.81 1.65,1.26c2.22,1.485 5.025,3 8.205,3.84l-2.835,31.365h-1.575c-1.995,-5.115 -7.98,-21.39 -8.505,-33.45c1.125,-0.915 2.175,-1.89 3.06,-3.015zM110.34,124.815c0.885,1.125 1.935,2.1 3.06,3.015c-0.525,12.06 -6.51,28.335 -8.505,33.45h-1.575l-2.835,-31.365c3.18,-0.84 5.985,-2.355 8.205,-3.84c0.675,-0.45 1.065,-0.825 1.65,-1.26zM156.315,130.77c3.945,1.89 8.265,3.375 12.33,5.1c4.23,1.8 8.1,3.885 10.83,6.63c1.905,1.89 3.12,4.35 3.93,7.26h-22.155c-1.17,-2.085 -2.535,-4.005 -4.11,-5.685c-1.26,-1.38 -2.64,-2.61 -4.08,-3.75zM33.39,131.07l5.055,9.705c-1.26,1.035 -2.475,2.13 -3.585,3.345c-1.56,1.68 -2.925,3.57 -4.08,5.64c-0.03,0 -0.045,0 -0.06,0h-22.395c0.615,-2.97 1.665,-5.43 3.45,-7.335c2.535,-2.7 6.24,-4.785 10.395,-6.6c3.66,-1.62 7.56,-3.045 11.22,-4.755zM120.795,132.48c5.1,2.565 10.8,4.695 16.185,7.2c5.67,2.64 10.89,5.67 14.535,9.6c2.88,3.12 4.53,7.095 5.265,12h-43.575c2.475,-6.51 6.375,-17.955 7.59,-28.8zM71.205,132.495c1.215,10.83 5.115,22.275 7.59,28.785h-43.56c0.72,-4.875 2.37,-8.835 5.25,-11.94c3.66,-3.945 8.88,-6.975 14.55,-9.615c5.37,-2.505 11.07,-4.665 16.17,-7.23z"></path></g></g></g></svg>
                    <div className="text-bold">Order our senior companionship services</div>
                    <div className="text-xl">We help to carry out daily tasks or just hang out</div>
                </div>   
                

                    <div className="btn-full"><a href="#">Book and rate our services now ></a></div>
                </section>   
            <section className="scroll-card">
                <header className="scroll-header">
                    <div>Our Gallery</div>
                </header>                    
                <ul className="scroll-ul">
                    <li className="scroll-li">
                        <a className="scroll-a" href="#">
                            <img className="scroll-img" src="./static/img/care-giver1.jpg" width="150" height="110" />
                            <div className="topic-strip__filter">
                                <div className="topic-strip__title text-s"></div>
                            </div>
                        </a>
                    </li>
                    <li className="scroll-li">
                      <a className="scroll-a" href="#">
                        <img className="scroll-img" src="./static/img/care-giver2.jpg" width="150" height="110" />
                        <div className="topic-strip__filter">
                          <div className="topic-strip__title text-s"></div>
                        </div>
                      </a>
                    </li>
                    <li className="scroll-li">
                      <a className="scroll-a" href="#">
                        <img className="scroll-img" src="./static/img/care-giver3.jpg" width="150" height="110" />
                        <div className="topic-strip__filter">
                          <div className="topic-strip__title text-s"></div>
                        </div>
                      </a>
                    </li>
                    <li className="scroll-li">
                        <a className="scroll-a" href="#">
                            <img className="scroll-img" src="./static/img/care-giver4.jpg" width="150" height="110" />
                            <div className="topic-strip__filter">
                                <div className="topic-strip__title text-s"></div>
                            </div>
                        </a>
                    </li> 
                    <li className="scroll-li">
                        <a className="scroll-a" href="#">
                            <img className="scroll-img" src="./static/img/care-giver5.jpg" width="150" height="110" />
                            <div className="topic-strip__filter">
                                <div className="topic-strip__title text-s"></div>
                            </div>
                        </a>
                    </li>
                    <li className="scroll-li">
                        <a className="scroll-a" href="#">
                            <img className="scroll-img" src="./static/img/care-giver6.jpg" width="150" height="110" />
                            <div className="topic-strip__filter">
                                <div className="topic-strip__title text-s"></div>
                            </div>
                        </a>
                    </li> 
                    <li className="scroll-li">
                        <a className="scroll-a" href="#">
                            <img className="scroll-img" src="./static/img/care-giver7.jpg" width="150" height="110" />
                            <div className="topic-strip__filter">
                                <div className="topic-strip__title text-s"></div>
                            </div>
                        </a>
                    </li>
                    <li className="scroll-li">
                      <a className="scroll-a" href="#">
                        <img className="scroll-img" src="./static/img/care-giver2.jpg" width="150" height="110" />
                        <div className="topic-strip__filter">
                          <div className="topic-strip__title text-s"></div>
                        </div>
                      </a>
                    </li>
                    <li className="scroll-li">
                      <a className="scroll-a" href="#">
                        <img className="scroll-img" src="./static/img/care-giver3.jpg" width="150" height="110" />
                        <div className="topic-strip__filter">
                          <div className="topic-strip__title text-s"></div>
                        </div>
                      </a>
                    </li>                    
                 
                </ul>
            </section>
            
            <section className="enquiry section">
                <div className="enq-header">Order our service now!</div>
                <form className="enq-form" onSubmit={e => {
                  var form = e.target;

                  e.preventDefault();
                  Router.push(
                    {
                      pathname: '/OrderForm',
                      query: {
                        service: form.service.value,
                        area: form.area.value,
                        date: form.date.value,
                        time: form.time.value
                      }
                    }
                  );
                }}>
                  <select id="enq-service" name="service" data-default-value="" className="dropdown">
                    <option value="">Select Service</option>
                    {this.state.services.map((service, i) => (
                      <option value={service.service} key={i}>{service.title}</option>
                    ))}
                  </select>
                  <select id="enq-area" name="area" data-default-value="" className="dropdown">
                    <option value="">Select Area</option>
                    {this.state.areas.map((area, i) => (
                      <option value={area.name} disabled={!area.select} key={i}>{area.name}</option>
                    ))}
                  </select>
                    <input type="date" id="date" name="date" placeholder="DATE" />
                    <input type="time" id="time" name="time" placeholder="TIME" /> 
                    <input type="submit" value="Instant Quotation" />
                </form>
            </section>
            
            <section className="our-services section">
                <header className="srv-header">Family Helper</header>
                <p className="content">
                    We provides can companion work for seniors to carry out their daily living activities like doctor appointment,city tour,saloon,massage centre,market walk,friend visit,grocery shopping,having meal and more.we are not a healthcare provider. Our services merely provide accompanying assistant work for senior and did not include any medical consultation. We pick you or your senior from home,drives you to destination appointment,accompany and wait you until your appointment finished,send you back home.
                </p>

            </section>

            <section className="all-services section">
                <div className="header">
                    <div>Our Services</div>
                </div>                    
                
                
                <div className="services">
                  <a className="service" href="/services/DoctorAppointment">
                            <img src="./static/img/stethoscope.png" />
                            <div className="title">Dortor Appointment</div>
                        </a>  
                        
                  <a className="service" href="/services/SingingorDancingTraining">
                            <img src="./static/img/choir.png" />
                            <div className="title">Singing/Dancing</div>
                        </a>    
                        
                        <a className="service" href="/services/MarketWalk">
                            <img src="./static/img/fish.png" />
                            <div className="title">Market Walk</div>
                        </a>  
                        
                  <a className="service" href="/services/GroceryShopping">
                            <img src="./static/img/ingredients.png" />
                            <div className="title">Grocery Shopping</div>
                        </a>                          
                        
                        <a className="service" href="/services/Saloon">
                            <img src="./static/img/barbershop.png" />
                            <div className="title">Saloon</div>
                        </a>  
                        
                        <a className="service" href="/services/AttendFuneralFunction">
                          <img src="./static/img/pray.png" />
                            <div className="title">Funeral House</div>
                        </a>  
                        
                  <a className="service" href="/services/RehabilationCenter">
                          <img src="./static/img/physical-therapy.png" />
                          <div className="title">Rehabilitation Centre</div>
                        </a>
                        <a className="service" href="/services/AttendWeddingCeremony">
                          <img src="./static/img/newlyweds.png" />
                          <div className="title">Wedding Ceremony</div>
                        </a>
                        <a className="service" href="/services/ReunionwithFriendRelative">
                          <img src="./static/img/groups.png" />
                          <div className="title">Friends Reunion</div>
                        </a>
                        <a className="service" href="/services/VisitRelativeorFriend">
                          <img src="./static/img/meeting.png" />
                          <div className="title">Relative Visits</div>
                        </a>

                        <a className="service" href="/services/VisitFriendRelativeatHospital">
                          <img src="./static/img/being-sick.png" />
                          <div className="title">Patient Visit</div>
                        </a>

                        <a className="service" href="/services/VisitOldFolksHouse">
                          <img src="./static/img/men-age-group-6.png" />
                          <div className="title">Old Folk Home</div>
                        </a>

                        <a className="service" href="/services/DialysisCentre">
                          <img src="./static/img/dialysis-machine.png" />
                          <div className="title">Dialysis Centre</div>
                        </a>

                        <a className="service" href="/services/HavingMealatRestaurant">
                          <img src="./static/img/restaurant.png" />
                          <div className="title">Having Meal</div>
                        </a>

                        <a className="service" href="/services/AcupunctureTreatment">
                          <img src="./static/img/neck-and-shoulder-massage-area.png" />
                          <div className="title">Acupuncture</div>
                        </a>

                        <a className="service" href="/services/CityTour">
                          <img src="./static/img/city.png" />
                          <div className="title">City Tour</div>
                        </a>
                        <a className="service" href="/services/LakeMorningWalk">
                          <img src="./static/img/lake.png" />
                          <div className="title">Lake Walking</div>
                        </a>                        
                        <a className="service" href="/services/TachiPractising">
                          <img src="./static/img/functional-training.png" />
                          <div className="title">Tachi Practising</div>
                        </a>
                         
                        <a className="service" href="/services/WatchMovie">
                          <img src="./static/img/movie-projector.png" />
                          <div className="title">Watch Movie</div>
                        </a>
                         
                        <a className="service" href="/services/RunErrandsWork">
                          <img src="./static/img/front-desk.png" />
                          <div className="title">Errands Service</div>
                        </a>
                         
                        <a className="service" href="/services/ReligiousCharityActivities">
                          <img src="./static/img/contemporary-christian-music.png" />
                          <div className="title">Religious Activities</div>
                        </a>
                         
                        <a className="service" href="/services/WelcomeRelativeorFriend">
                          <img src="./static/img/airplane-landing.png" />
                          <div className="title">Welcome Friends</div>
                        </a>
                        <a className="service" href="/services/MassageCentre">
                          <img src="./static/img/massage.png" />
                          <div className="title">Massage Centre</div>
                        </a>
                        <a className="service" href="/services/OutdoorHiking">
                          <img src="./static/img/trekking.png" />
                          <div className="title">Outdoor Hiking</div>
                        </a>        
                </div>
                <div className="btn-link"><a href="#">Read more</a></div>
            </section> 
          </div>      

    </Layout>
  </div>
    );
  }
}

export default Index; 