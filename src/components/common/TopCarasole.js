import React, { Component } from 'react';
import { Carousel } from 'antd';
import './topcarousel.css';
export default class TopCarosusel extends Component {
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h1>One Tap To Pay</h1>
                </div>
                <div><img src="/img/op1.png" className="responsive" alt="logo1" /></div>
                <div><img src="/img/op2.jpg" className="responsive" alt="dsad1" /></div>
                <div><img src="/img/oplogo.png" className="responsive" alt="dsad" /></div>
                <div><img src="/img/op3.jpg" className="responsive" alt="dsad1" /></div>
            </Carousel>
        )
    }
};


