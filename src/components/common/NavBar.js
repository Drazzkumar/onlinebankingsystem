import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import './topcarousel.css';
import SmallNav from './smallNav'
import data from "./navData";

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
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    id="navigationbar"
                >
                    {
                        data && data.map(d => (
                            <Menu.Item key={d.value}>
                                <NavLink to={d.key} rel="noopener noreferrer">
                                    {d.key === "/" ? <Icon type="home" /> : ""}{d.value}
                                </NavLink>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Fragment>
        );
    }
}

export default NavBar