import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import TopCarosusel from './TopCarasole';

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
                <TopCarosusel />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
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
                        <MenuItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
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