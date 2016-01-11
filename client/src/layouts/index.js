import React from 'react';

import MainNavbar from './Navbar';
import Footer from './Footer';

var Index = React.createClass({
  render() {
    return (
      <div>
        <MainNavbar/>
            {this.props.children}
        <Footer/>
      </div>
    );
  }
});

export default Index;