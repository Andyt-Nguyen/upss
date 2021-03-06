import React, { Component } from 'react';
import '../styles/App.css';
import Banner from './Banner'
import Menu from './Menu'
import Info from './Info'
import FeaturedMembers from './FeaturedMembers'
import ContactUs from './ContactUs'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }

  render() {
    return (
      <div className="app-container">
        <Banner
          onMenuToggle={this.props.onMenuToggle}
        />
        <Menu
          isMenuOpen={this.props.isMenuOpen}
          onMenuToggle={this.props.onMenuToggle}
        />
        <Info />
        <FeaturedMembers />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
