import React, { Component } from 'react'
import { Collapse, List } from 'antd';
import './topcarousel.css';
import { NavLink } from 'react-router-dom'
import data from "./navData";

const Panel = Collapse.Panel;


export default class SmallNav extends Component {
    topNavClicked = (e) => {
        let carousole = document.getElementById("animateit");
        e.length > 0 ?
            carousole && carousole.setAttribute("style", 'display:none;')
            :
            carousole && carousole.setAttribute("style", 'display:initial;')

    }
    listChange = () => {
        let element = document.querySelector(".small");
        let event = new MouseEvent('change');
        element.dispatchEvent(event);
    }
    render() {

        return (<Collapse className="small" onChange={this.topNavClicked}>
            <Panel header="OnlinePay" key="1">
                <List
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item onClick={this.listChange}><NavLink to={item.key}>{item.value}</NavLink></List.Item>
                    )}
                />
            </Panel>
        </Collapse>
        )
    }
}






