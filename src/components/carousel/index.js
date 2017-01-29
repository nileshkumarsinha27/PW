import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

// general styles
import 'style!css!react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'style!css!react-responsive-carousel/lib/styles/carousel.css';
import './style.scss';
var img1=require('./1.jpg');
var img2=require('./2.jpg');
var img3=require('./3.jpg');
var img4=require('./4.jpg');
var img5=require('./5.jpg');

export default class DemoCarousel extends Component {

    render() {
          var carouselWidth={width:'80%',
          margin:'0px auto'};
        return (
            <div style={carouselWidth} >
                <Carousel showArrows={true} >
                    <div>
                        <img src={img1}/>
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                    <div>
                        <img src={img4} />
                    </div>
                    <div>
                        <img src={img5} />
                    </div>
                </Carousel>
            </div>

        );

    }
}