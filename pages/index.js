import Head from 'next/head';
import "../scss/fonts.scss";
import "../scss/style.scss";


const Index = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
        <header className="header">
            <div className="header-left">
                <div id="menu-burger">
                  <div className="burger"></div>
                </div>
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="50" height="50"
viewBox="0 0 210 210"
style={{fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,210v-210h210v210z" fill="none"></path><g fill="#3498db"><g id="surface1"><path d="M105,8.4c-0.73828,0 -1.47656,0.19688 -2.13281,0.59062l-60.86719,35.78203v9.76172l63,-37.06172l63,37.06172v-9.76172l-60.86719,-35.78203c-0.65625,-0.39375 -1.39453,-0.59062 -2.13281,-0.59062zM105,27.21797l-50.4,29.64609v56.53594c0,2.32969 1.87031,4.2 4.2,4.2h92.4c2.32969,0 4.2,-1.87031 4.2,-4.2v-56.53594zM21,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v50.4c0,12.6 3.92109,16.12734 8.4,21c0,0 25.06875,32.17266 29.4,37.8v8.4c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-16.8c0,-15.45469 -7.67812,-26.75859 -16.5375,-35.66719l-20.13047,-21.47578c-7.69453,-7.69453 -13.60078,-2.67422 -14.74922,-1.46016c-3.78984,3.97031 -3.80625,10.15547 -0.06562,14.06016l20.13047,21.39375c1.34531,1.41094 1.34531,3.69141 0,5.10234c-0.65625,0.70547 -1.54219,1.05 -2.42813,1.05c-0.86953,0 -1.75547,-0.34453 -2.42813,-1.05l-18.44063,-19.70391c-12.55078,-12.64922 -4.15078,-25.24922 0.04922,-25.24922v-37.8c0,-8.4 -5.85703,-12.6 -12.6,-12.6zM189,67.2c-6.74297,0 -12.6,4.2 -12.6,12.6v37.8c4.2,0 12.6,12.6 0.04922,25.24922l-18.44063,19.70391c-0.67266,0.70547 -1.55859,1.05 -2.42812,1.05c-0.88594,0 -1.77187,-0.34453 -2.42812,-1.05c-1.34531,-1.41094 -1.34531,-3.69141 0,-5.10234l20.14687,-21.39375c3.72422,-3.90469 3.70781,-10.08984 -0.06563,-14.06016c-1.16484,-1.21406 -7.07109,-6.23437 -14.76562,1.46016l-20.13047,21.47578c-8.85937,8.90859 -16.5375,20.2125 -16.5375,35.66719v16.8c0,2.31328 1.88672,4.2 4.2,4.2h33.6c2.31328,0 4.2,-1.88672 4.2,-4.2v-8.4c4.33125,-5.62734 29.4,-37.8 29.4,-37.8c4.47891,-4.87266 8.4,-8.4 8.4,-21v-50.4c0,-8.4 -5.85703,-12.6 -12.6,-12.6z"></path></g></g></g></svg>
            <h1 className="logo-title">Family Helper</h1>
            </div>
            
            <div className="header-right">
                <img className="search" src="https://img.icons8.com/ios/50/000000/search-filled.png" />
                <svg className="profile" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 192 192" style={{fill:'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}><path d="M0,192v-192h192v192z" fill="none"></path><g fill="#aaaaaa"><path d="M96,7.71c-48.7323,0 -88.32,39.58769 -88.32,88.32c0,46.48109 36.02423,84.61587 81.6375,88.0425c0.08993,0.00731 0.17989,0.01547 0.27,0.0225c2.12094,0.15283 4.253,0.255 6.4125,0.255c2.1595,0 4.29156,-0.10217 6.4125,-0.255c0.09011,-0.00703 0.18007,-0.01519 0.27,-0.0225c45.61327,-3.42663 81.6375,-41.56141 81.6375,-88.0425c0,-48.7323 -39.5877,-88.32 -88.32,-88.32zM96,15.39c44.58172,0 80.64,36.05827 80.64,80.64c0,22.00974 -8.81352,41.91844 -23.0775,56.46c-6.10237,-4.44372 -13.64367,-7.0946 -20.4,-9.465c-8.00256,-2.8032 -15.57336,-5.46048 -17.67,-10.08c-0.33024,-3.94368 -0.30072,-7.02336 -0.27,-10.56l0.0075,-1.5c3.40992,-3.2448 7.69812,-10.09302 9.165,-16.4175c2.5344,-1.35168 5.63322,-4.59186 6.5625,-12.3525c0.46464,-3.85152 -0.6315,-6.83436 -2.1675,-8.835c2.0736,-7.1232 6.19938,-25.15596 -1.0275,-36.795c-3.05664,-4.91904 -7.66914,-8.02254 -13.7325,-9.2475c-3.40608,-4.21632 -9.83358,-6.5175 -18.4275,-6.5175c-13.05984,0.24192 -22.63392,4.24206 -28.44,11.8875c-6.84672,9.024 -8.14044,22.65828 -3.855,40.545c-1.58592,2.00064 -2.72982,5.02668 -2.2575,8.955c0.93312,7.76064 4.0206,11.00082 6.555,12.3525c1.46688,6.33216 5.75124,13.1802 9.165,16.425l0.0075,1.4625c0.03072,3.552 0.06024,6.63846 -0.27,10.5975c-2.10432,4.63104 -9.71154,7.31724 -17.7525,10.155c-6.71576,2.37145 -14.21242,5.02641 -20.3025,9.4125c-14.27502,-14.54321 -23.0925,-34.46313 -23.0925,-56.4825c0,-44.58172 36.05828,-80.64 80.64,-80.64z"></path></g></g></svg>
            </div>            
        </header>
        
        <section id="menu-mobile">
            <div className="overlay"></div>
            <div className="sidebar-nav">
                <ul className="smenu">
                    <li className="sitem"><a className="stitle" href="#">Home</a></li>
                    <li className="sitem"><a className="stitle" href="#">What is Family Helper</a></li>
                    <li className="sitem"><a className="stitle" href="#">How We Could Help You</a></li>
                    <li className="sitem"><a className="stitle" href="#">Excellent Companionship Services</a></li>
                    <li className="sitem"><a className="stitle" href="#">How It Works</a></li>
                    <li className="sitem"><a className="stitle" href="#">Why Family Helper</a></li>
                </ul>
            </div>
        </section>
        
        <div id="main-centent">
            <section className="main-slider">
                <div className="slides">
                    <span className="overlay">
                        <div className="frames">
                          <img className="slide" src="./static/img/care-giver1.jpg" />
                          <img className="slide" src="./static/img/care-giver2.jpg" />
                          <img className="slide" src="./static/img/care-giver3.jpg" />
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
                <form className="enq-form">
                    <select id="enq-service" name="service" data-default-value="" className="dropdown">
                        <option value="">Select State</option>
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Johor">Johor</option>
                        <option value="Penang">Penang</option>
                        <option value="Perak">Perak</option>
                        <option value="Malacca">Malacca</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Terengganu">Terengganu</option>
                        <option value="Perlis">Perlis</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Sarawak">Sarawak</option>
                    </select>
                    <input type="text" id="addr-from" name="addr-from" placeholder="FROM" />
                    <input type="text" id="addr-to" name="addr-to" placeholder="TO" />
                    <input type="text" id="date" name="date" placeholder="DATE" />
                    <input type="text" id="time" name="time" placeholder="TIME" /> 
                    <input type="submit" value="Instant Quotation" />
                </form>
            </section>
            
            <section className="our-services section">
                <header className="srv-header">What is Family Helper</header>
                <p className="content">
                    We provide companion works for seniors to carry out their daily living task activities.
Our term members, will ensure your senior feel happy, energirtic and reduce their fear of loneliness or depression.  We aew not a healthcare provider but merely providing services of accompanying assitent and without include any medical consultation in our services.
                </p>

            </section>

            <section className="all-services section">
                <div className="header">
                    <div>Our Services</div>
                </div>                    
                
                
                <div className="services">
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/stethoscope.png" />
                            <div className="title">Dortor Appointment</div>
                        </a>  
                        
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/choir.png" />
                            <div className="title">Singing/Dancing</div>
                        </a>    
                        
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/fish.png" />
                            <div className="title">Market Walk</div>
                        </a>  
                        
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/ingredients.png" />
                            <div className="title">Grocery Shopping</div>
                        </a>                          
                        
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/barbershop.png" />
                            <div className="title">Saloon</div>
                        </a>  
                        
                        <a className="service" href="#">
                            <img src="https://img.icons8.com/ios/100/3498db/headstone.png" />
                            <div className="title">Funeral House</div>
                        </a>  
                        
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/physical-therapy.png" />
                          <div className="title">Rehabilitation Treatment</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/newlyweds.png" />
                          <div className="title">Wedding Ceremony</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/groups.png" />
                          <div className="title">Friends Reunion</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/meeting.png" />
                          <div className="title">Relative Visits</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/being-sick.png" />
                          <div className="title">Patient Visit</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/men-age-group-6.png" />
                          <div className="title">Old Folk Home</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/dialysis-machine.png" />
                          <div className="title">dialysis Center</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/restaurant.png" />
                          <div className="title">Having Meal</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/neck-and-shoulder-massage-area.png" />
                          <div className="title">Acupuncture</div>
                        </a>

                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/city.png" />
                          <div className="title">City Tour</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/lake.png" />
                          <div className="title">Lake Walking</div>
                        </a>                        
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/functional-training.png" />
                          <div className="title">Tachi Practising</div>
                        </a>
                         
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/movie-projector.png" />
                          <div className="title">Watch Movie</div>
                        </a>
                         
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/front-desk.png" />
                          <div className="title">Errands Service</div>
                        </a>
                         
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/contemporary-christian-music.png" />
                          <div className="title">Religious Activities</div>
                        </a>
                         
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/airplane-landing.png" />
                          <div className="title">Welcome Friends</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/massage.png" />
                          <div className="title">Massage Centre</div>
                        </a>
                        <a className="service" href="#">
                          <img src="https://img.icons8.com/ios/100/3498db/trekking.png" />
                          <div className="title">Outdoor Hiking</div>
                        </a>        
                </div>
                <div className="btn-link"><a href="#">Read more</a></div>
            </section> 
          </div>
        
    <section className="footer">
        <div className="copyright">© 2019 Family Helper Sdn Bhd</div>
        <div className="info">Family Helper® The safer way to take care of your elderly™</div>
    </section>
  </div>
);

export default Index; 