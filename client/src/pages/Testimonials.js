import React from "react";

import Header from "./../components/Header";
import Footer from "./../components/Footer";

import quotes from "./../assets/quotes.jpg";

class Testimonials extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Header tab="Testimonials"/>
                <div class="container text-center">
                	<div class="row justify-content-center">
                		<div style={styles.header}>
                			<p style={styles.h1Text}>WHAT DO PEOPLE THINK?</p>
                		</div>
                	</div>
                	<div class="row">
                		<div class="col align-items-center">
                			<img src={quotes} alt="quotation marks" class="shadow-lg" style={{width: "100%"}}/>
                		</div>
                		<div class="col d-flex flex-column">
                			<div style={{...styles.grayLine, width: 220}}/>
                			<ul class="text-left" style={{color: "#5e5e5e"}}>
                				<li>"I was pleasantly surprised to see how it captured and kept my students attention." -Theresa P. Special Education Teacher</li>
                				<li>"My younger art students were able to participate more confidently as they accomplished tasks with the support of the tool that were challenging without it. It brought an instant sense of satisfaction of the kids." -James M. Art Teacher</li>
                				<li>"I loved the excitement that showed on my class's face as I showed them what we were using in class that day." -Sharon T. Kindergarten Teacher</li>
                				<li>"I found myself using it after my client had left for my boardwork. It was comfortable to use and fun!" -Douglene J. Occupational Therapist</li>
                			</ul>
                		</div>
                	</div> 
                </div>
                <div style={{height: 100}}/>
                <Footer/>
            </React.Fragment>
        )
    }
}
 
export default Testimonials;

const styles = {
    sloganBar: {
        background: "#307BFF",
        color: "white",
        textAlign: "center"
    },
    handsImg: {
        maxWidth: "100%"
    },
    header: {
        padding: 40,
    },
    h1Text: {
        background: "black",
        color: "white",
        fontSize: 20,
        padding: 10
    },
    h2Text: {
        fontSize: 30
    }
}