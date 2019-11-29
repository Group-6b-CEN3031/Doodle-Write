import React from 'react';
import Slider from 'react-slick';
import Axios from "axios";

class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentWillMount() {
        Axios.get('/images')
            .then(response => {
                this.setState({images: response.data})
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() { 
        return (
            <div id='Media' style={{paddingTop: 50, paddingBottom: 100, paddingLeft: '7%', paddingRight: '7%', backgroundColor: 'white', opacity: 0.9, borderStyle: 'solid', borderWidth: 2, borderColor: '#FF4AF4'}}>
                <div style={{paddingBottom: 50, textAlign: 'center', fontFamily: 'Arial Rounded MT Bold', fontSize: 20, letterSpacing: 8,}}>MEDIA</div>
                <Slider {...settings}>
                {this.state.images.map((item, index) => { return (
                    <div key={index}>
                        <img src={item.url} alt={'image ' + index} style={{maxWidth: '100%', maxHeight: 266}}/>
                    </div>
                )})}
                </Slider>
            </div>  
        )
    }
}
 
export default Media;   

const settings = {
    dots: true,
    autoplay: true,
    arrows: true,
    focusOnSelect: true,
    centerMode: true,
    adaptiveHeight: true,
    accessibility: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1
}