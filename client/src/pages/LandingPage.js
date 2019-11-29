import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../landingElements/Home';
import Media from '../landingElements/Media';
import Testimonials from '../landingElements/Testimonials';
import ContactUs from '../landingElements/ContactUs';

import Demo from '../assets/demo.mp4'

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCartOpen: false
        }
    }

    render() {
        return (
            <React.Fragment>
                <video id="background-video" loop autoPlay muted style={{position: 'fixed', zIndex: -1}}>
                    <source src={Demo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Header/>
                <div style={{height: 200}}/>
                <Home/>
                <div style={{height: 250}}/>
                <Media/>    
                <div style={{height: 250}}/>
                <Testimonials/>
                <div style={{height: 250}}/>
                <ContactUs/>
                <div style={{height: 175}}/>
                <Footer/>
            </React.Fragment>
        )
    }
}
  
export default LandingPage;