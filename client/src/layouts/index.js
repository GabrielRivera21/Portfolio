import React from 'react';

import MainNavbar from './Navbar';
import Footer from './Footer';

class Index extends React.Component {
    render() {
        return (
          <div>
            <MainNavbar/>
                {this.props.children}
            <Footer/>
          </div>
        );
    }
};

export default Index;