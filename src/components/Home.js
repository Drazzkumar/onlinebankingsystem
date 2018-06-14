import React, { Component } from 'react'
import Login from './accounts/Login';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom'
import TopCarosusel from './common/TopCarasole';
import DropFile from './common/DropFile';

export default class Home extends Component {
    render() {
        return (
            <div>
                <TopCarosusel />
                <Login />
                <Button type='primary'>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </Button>
                <DropFile />
            </div>
        )
    }
}
