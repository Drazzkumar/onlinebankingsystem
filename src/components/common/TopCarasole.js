import React, { Component } from 'react';
import { Carousel } from 'antd';
import './topcarousel.css';
export default class TopCarosusel extends Component {
    render() {
        const imgSrc = ["/img/op1.png", "/img/op2.jpg", "/img/op3.jpg", "/img/op4.jpg", "/img/op41.jpg", "/img/pg.png", "/img/bill-pay.png"]
        return (
            <Carousel autoplay>
                {
                    imgSrc.map((img, i) =>
                        <div key={i}><img src={img} className="responsive" alt={img + i} /></div>
                    )
                }
            </Carousel>
        )
    }
};


