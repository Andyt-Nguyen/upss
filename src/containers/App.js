import React, { Component } from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Menu from './Menu'
import Info from './Info'
import FeaturedMembers from './FeaturedMembers'
import ContactUs from './ContactUs'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="">
        <Banner />
        <Menu />
        <Info />
        <FeaturedMembers />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
