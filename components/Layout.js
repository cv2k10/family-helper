import Link from 'next/link';
import React from 'react';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerMenuOpen: false,
    }
  }

  onClickMenuBurger() {
    this.setState({
      burgerMenuOpen: !this.state.burgerMenuOpen
    })

  }

  render() {
    return (
  <div>
    <header className="header">
      <div className="header-left">
            <div id="menu-burger" onClick={() => this.onClickMenuBurger()}>
          <div className={this.state.burgerMenuOpen ? "burger burger-cross" : "burger"}></div>
        </div>
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="50" height="50"
          viewBox="0 0 210 210"
          style={{ fill: '#000000' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,210v-210h210v210z" fill="none"></path><g fill="#3498db"><g id="surface1"><path d="M105,8.4c-0.73828,0 -1.47656,0.19688 -2.13281,0.59062l-60.86719,35.78203v9.76172l63,-37.06172l63,37.06172v-9.76172l-60.86719,-35.78203c-0.65625,-0.39375 -1.39453,-0.59062 -2.13281,-0.59062zM105,27.21797l-50.4,29.64609v56.53594c0,2.32969 1.87031,4.2 4.2,4.2h92.4c2.32969,0 4.2,-1.87031 4.2,-4.2v-56.53594zM21,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v50.4c0,12.6 3.92109,16.12734 8.4,21c0,0 25.06875,32.17266 29.4,37.8v8.4c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-16.8c0,-15.45469 -7.67812,-26.75859 -16.5375,-35.66719l-20.13047,-21.47578c-7.69453,-7.69453 -13.60078,-2.67422 -14.74922,-1.46016c-3.78984,3.97031 -3.80625,10.15547 -0.06562,14.06016l20.13047,21.39375c1.34531,1.41094 1.34531,3.69141 0,5.10234c-0.65625,0.70547 -1.54219,1.05 -2.42813,1.05c-0.86953,0 -1.75547,-0.34453 -2.42813,-1.05l-18.44063,-19.70391c-12.55078,-12.64922 -4.15078,-25.24922 0.04922,-25.24922v-37.8c0,-8.4 -5.85703,-12.6 -12.6,-12.6zM189,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v37.8c4.2,0 12.6,12.6 0.04922,25.24922l-18.44063,19.70391c-0.67266,0.70547 -1.55859,1.05 -2.42812,1.05c-0.88594,0 -1.77187,-0.34453 -2.42812,-1.05c-1.34531,-1.41094 -1.34531,-3.69141 0,-5.10234l20.14687,-21.39375c3.72422,-3.90469 3.70781,-10.08984 -0.06563,-14.06016c-1.16484,-1.21406 -7.07109,-6.23437 -14.76562,1.46016l-20.13047,21.47578c-8.85937,8.90859 -16.5375,20.2125 -16.5375,35.66719v16.8c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-8.4c4.33125,-5.62734 29.4,-37.8 29.4,-37.8c4.47891,-4.87266 8.4,-8.4 8.4,-21v-50.4c0,-8.4 -5.85703,-12.6 -12.6,-12.6z"></path></g></g></g></svg>
        <h1 className="logo-title">Family Helper</h1>
      </div>

      <div className="header-right">
        <img className="search" src="https://img.icons8.com/ios/50/000000/search-filled.png" />
        <svg className="profile" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 192 192" style={{ fill: '#000000' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#aaaaaa"><path d="M96,7.71c-48.7323,0 -88.32,39.58769 -88.32,88.32c0,46.48109 36.02423,84.61587 81.6375,88.0425c0.08993,0.00731 0.17989,0.01547 0.27,0.0225c2.12094,0.15283 4.253,0.255 6.4125,0.255c2.1595,0 4.29156,-0.10217 6.4125,-0.255c0.09011,-0.00703 0.18007,-0.01519 0.27,-0.0225c45.61327,-3.42663 81.6375,-41.56141 81.6375,-88.0425c0,-48.7323 -39.5877,-88.32 -88.32,-88.32zM96,15.39c44.58172,0 80.64,36.05827 80.64,80.64c0,22.00974 -8.81352,41.91844 -23.0775,56.46c-6.10237,-4.44372 -13.64367,-7.0946 -20.4,-9.465c-8.00256,-2.8032 -15.57336,-5.46048 -17.67,-10.08c-0.33024,-3.94368 -0.30072,-7.02336 -0.27,-10.56l0.0075,-1.5c3.40992,-3.2448 7.69812,-10.09302 9.165,-16.4175c2.5344,-1.35168 5.63322,-4.59186 6.5625,-12.3525c0.46464,-3.85152 -0.6315,-6.83436 -2.1675,-8.835c2.0736,-7.1232 6.19938,-25.15596 -1.0275,-36.795c-3.05664,-4.91904 -7.66914,-8.02254 -13.7325,-9.2475c-3.40608,-4.21632 -9.83358,-6.5175 -18.4275,-6.5175c-13.05984,0.24192 -22.63392,4.24206 -28.44,11.8875c-6.84672,9.024 -8.14044,22.65828 -3.855,40.545c-1.58592,2.00064 -2.72982,5.02668 -2.2575,8.955c0.93312,7.76064 4.0206,11.00082 6.555,12.3525c1.46688,6.33216 5.75124,13.1802 9.165,16.425l0.0075,1.4625c0.03072,3.552 0.06024,6.63846 -0.27,10.5975c-2.10432,4.63104 -9.71154,7.31724 -17.7525,10.155c-6.71576,2.37145 -14.21242,5.02641 -20.3025,9.4125c-14.27502,-14.54321 -23.0925,-34.46313 -23.0925,-56.4825c0,-44.58172 36.05828,-80.64 80.64,-80.64z"></path></g></g></svg>
      </div>
    </header>

    <section id="menu-mobile" className={this.state.burgerMenuOpen ? "display-on" : null}>
      <div className="overlay" onclick={() => this.setState({ burgerMenuOpen: false })}></div>
      <div className="sidebar-nav">
        <ul className="smenu">
          <li className="sitem"><Link href={"/"}><a className="stitle">Home</a></Link></li>
          <li className="sitem"><Link href={"/WhatIsFamilyHelper"}><a className="stitle">What is Family Helper</a></Link></li>
          <li className="sitem"><Link href={"/HowWeHelpYou"}><a className="stitle">How We Could Help You</a></Link></li>
          <li className="sitem"><Link href={"/ExcellentCompanionshipServices"}><a className="stitle">Excellent Companionship Services</a></Link></li>
          <li className="sitem"><Link href={"/HowItWorks"}><a className="stitle">How It Works</a></Link></li>
          <li className="sitem"><Link href={"/WhyFamilyHelper"}><a className="stitle">Why Family Helper</a></Link></li>
          <li className="sitem"><Link href={"/CustomerComments"}><a className="stitle">Customer Comments About Our Services</a></Link></li>
          <li className="sitem"><Link href={"/Faq"}><a className="stitle">FAQ</a></Link></li>
          <li className="sitem"><Link href={"/Pricing"}><a className="stitle">Pricing</a></Link></li>
          <li className="sitem"><Link href={"/ContactUs"}><a className="stitle">Contact Us</a></Link></li>
          <li className="sitem"><Link href={"/AboutUs"}><a className="stitle">About Us</a></Link></li>
          
        </ul>
      </div>
    </section>

    {this.props.children}

    <section className="footer">
      <div className="copyright">© 2019 Family Helper Sdn Bhd</div>
      <div className="info">Family Helper® The safer way to take care of your elderly™</div>
    </section>
  </div>
)}
    }

export default Layout;