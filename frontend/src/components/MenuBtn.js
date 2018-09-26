import React, { Component } from 'react'


// code
export default class BurgerMenu extends Component {

    handleClick = () => {
        this.props.showMenu({
            isOpen: !this.props.isOpen
        })
    }

    render() {
        return(
            <div className="bm-burger-button">
                <span>
                    <span className="burger-button__color bm-burger-button__top" />
                    <span className="burger-button__color bm-burger-button__middle" />
                    <span className="burger-button__color bm-burger-button__bottom" />
                </span>
                <button className="bm-burger-button__btn" onClick={this.handleClick}>
                    open menu
                </button>
            </div>
        )
    }
}
