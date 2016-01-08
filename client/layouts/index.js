import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
            {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default Index;