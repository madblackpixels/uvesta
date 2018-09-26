import React, { Component } from 'react'

// bootstrap
import { ButtonGroup, Button } from 'react-bootstrap'


// code
export default class Header__SiteLangBtnGroup extends Component {

    updateLang = (event) => {
        this.props.update_AppStates({
            siteLang: event.target.attributes.getNamedItem('lang').value
        })
    };

    render() {

        return(
             <ButtonGroup className="btn-group__lang" onClick={this.updateLang.bind(this)}>
                 <Button lang='data_ru' className="btn__lang">RU</Button>
                 <Button lang='data_en' className="btn__lang">EN</Button>
             </ButtonGroup>
        )
    }
}