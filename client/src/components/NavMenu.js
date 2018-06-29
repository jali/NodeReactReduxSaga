import React from 'react'
import { Menu } from 'semantic-ui-react'
import Login from './Login'
import Register from './Register'
export const NavMenu = (props) => {
    return(
        <div>
            {props.children}
            <Menu inverted>
                <Menu.Item name="home" active={this.activeItem === "home"} header>Bookface</Menu.Item>
                <Menu.Item name="Account" onClick={this.handleItemClick}/>
                <Menu.Menu position="right">
                    <Menu.Item>
                    <Login />

                    <Register />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default NavMenu


    