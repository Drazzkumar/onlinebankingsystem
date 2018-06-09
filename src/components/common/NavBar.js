import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './topcarousel.css';
import TopCarosusel from './TopCarasole';
import SmallNav from './smallNav'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class NavBar extends Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Fragment>
                <SmallNav />
                <TopCarosusel />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    id="navigationbar"
                >
                    <Menu.Item key="mail">
                        <NavLink to="/" rel="noopener noreferrer">
                            <Icon type="home" />OnlinePay
                        </NavLink>
                    </Menu.Item>

                    {/* <Menu.Item key="app" >
                        <NavLink to="/services">
                            <Icon type="appstore" />
                        </NavLink>
                    </Menu.Item> */}


                    <SubMenu title={<span><Icon type="/services" />Services</span>}>
                        <MenuItemGroup title="Payment">
                            <Menu.Item key="setting:1">ABill Payment</Menu.Item>
                            <Menu.Item key="setting:2">BBill Payment</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Transfer">
                            <Menu.Item key="setting:3">Payment Request</Menu.Item>
                            <Menu.Item key="setting:4">Send To Friend</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <NavLink to="/about" rel="noopener noreferrer">About Us</NavLink>
                    </Menu.Item>
                </Menu>
            </Fragment>
        );
    }
}

export default NavBar