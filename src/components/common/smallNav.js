import React, { Component } from 'react'
import { Collapse, List } from 'antd';
import './topcarousel.css';

const Panel = Collapse.Panel;
const navdata = ["Home", "Login", "About Us"]
export default () => {
    return (<Collapse className="small">
        <Panel header="OnlinePay" key="1">
            <Panel header="OnlinePa fadsfsaf" key="1" />
            <Panel header="OnlinePay" key="2">
            </Panel>
            <Panel header="OnlinePay" key="3">
            </Panel>
            <Panel header="OnlinePay" key="5">
            </Panel>
            <Panel header="OnlinePay" key="6">
            </Panel>
        </Panel>
    </Collapse>
    )
};
