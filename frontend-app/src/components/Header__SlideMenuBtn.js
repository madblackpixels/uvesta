import React, { Component } from 'react'


// code
export default class Header__SlideMenuBtn extends Component {

    updateMenuFlag = () => {
        this.props.update_AppStates({
            menuOpen: true
        })
    };

    render() {

        return(
             <div className="bm-burger-button">
                 <span>
                     <span className="burger-button__color bm-burger-button__top" />
                     <span className="burger-button__color bm-burger-button__middle" />
                     <span className="burger-button__color bm-burger-button__bottom" />
                 </span>
                 <button className="bm-burger-button__btn" onClick={this.updateMenuFlag}>
                     open menu
                 </button>
             </div>
        )
    }
}