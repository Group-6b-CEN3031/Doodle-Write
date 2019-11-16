import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitterSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
    render() { 
        return (
            <nav class="navbar fixed-bottom navbar-expand-lg navbar-light shadow-lg bg-white rounded" style={{backgroundColor: "#ffffff"}}>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <a href="https://www.facebook.com/" style={{padding: 10}}> 
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                    </a>
                    <a href="https://www.twitter.com/" style={{padding: 10}}> 
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/" style={{padding: 10}}> 
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                </div>
                © 2019 Scoot n' Doodle Co.
            </nav>
        )
    }
}
 
export default Footer;