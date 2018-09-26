import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

// bootstrap
import { Nav, NavItem } from 'react-bootstrap'

// code
export default class General_SlideMenu extends Component {

    changeMenuFlag (state) {
        this.props.update_AppStates({ menuOpen: state.isOpen })
    };


    render() {

        return(
            <Menu
                isOpen={this.props.menuOpen} customBurgerIcon={false}
                className="background-color__black" onStateChange={(state) => this.changeMenuFlag(state) } >

                <div className="bm-vertical-menu">
                    <Nav>
                        <NavItem href="/" className="slide-menu">
                            Главная
                        </NavItem>
                        <NavItem href="/" className="slide-menu">
                            Услуги
                        </NavItem>
                        <NavItem href="/" className="slide-menu">
                            Портфолио
                        </NavItem>
                        <NavItem href="/" className="slide-menu">
                            Контакты
                        </NavItem>
                    </Nav>
                </div>
            </Menu>
        )
    }
}

