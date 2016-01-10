import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

var Index = React.createClass({
  render() {
    return (
      <div>
        <Navbar/>
            {this.props.children}
        <Footer/>
      </div>
    );
  }
});

export default Index;