import Link from 'next/link';
import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <nav>        
        <div>
          <Link href="/">
            <a title="Our API">
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a title="About Next JS">
              About Next JS
            </a>
          </Link>
        </div>
        
      </nav>
    )
  }
}

export default NavBar;