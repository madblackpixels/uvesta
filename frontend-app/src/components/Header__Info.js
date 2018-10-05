import React, { Component } from 'react'

// bootstrap
import { Col, Glyphicon } from 'react-bootstrap'


// code
export default class Header__Info extends Component {

    render() {

        return(
            <Col xs={8} sm={6} md={8} lg={6} className="text-right">

                <p className="no-magrin">
                    <span className="text-color__bright-red block__header-icon glyphicon__margin">
                        <Glyphicon glyph="earphone" className="md__line"/>
                    </span>
                    <span className="text-subtitle text-color__blood-red md__line">
                        {this.props.content.phone}
                    </span>
                </p>

                <p className="no-magrin">
                    <span className="text-color__gray block__header-text md__hide">
                        {this.props.content.subtitle}
                    </span>
                </p>

            </Col>
        )
    }
}