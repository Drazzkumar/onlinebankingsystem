import React, { Component } from 'react'
import Login from './accounts/Login';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Login />
                <Button type='primary'>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </Button>
            </div>
        )
    }
}
