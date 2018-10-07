import React, { Component } from 'react'

// bootstrap
import { Col, Glyphicon } from 'react-bootstrap'


// code
export default class Header__Info extends Component {

    render() {

        return(
            <Col xs={10} sm={8} md={8} lg={8} className="text-right">

                <p className="no-magrin block-header__phone">
                    <span className="text-color__bright-red">
                        <Glyphicon glyph="earphone" className="md__line"/>
                    </span>
                    <span className="text-subtitle text-color__blood-red">
                        {this.props.content.phone}
                    </span>
                </p>

                <p className="no-magrin block-header__subtitle">
                    <span className="text-color__gray">
                        {this.props.content.subtitle}
                    </span>
                </p>

            </Col>
        )
    }
}