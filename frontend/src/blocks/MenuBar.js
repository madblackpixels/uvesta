import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

import { Nav, NavItem } from 'react-bootstrap'


// code
export default class MenuBar extends Component {
    render() {
        return(

            <Menu isOpen={this.props.isOpen} customBurgerIcon={false} className="background__black">
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

