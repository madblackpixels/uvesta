import React, { Component } from 'react'

// bootstrap
import { Col, Glyphicon } from 'react-bootstrap'


// code
export default class Header__Info extends Component {

    render() {

        return(
            <Col xs={6} sm={6} md={6} lg={6} className="text-right">

                <p className="no-magrin">
                    <span className="text-color__bright-red block__header-icon glyphicon__margin">
                        <Glyphicon glyph="earphone" />
                    </span>
                    <span className="text-subtitle text-color__blood-red">
                        +7 (900) 000 00 00
                    </span>
                </p>

                <p className="no-magrin">
                    <span className="text-color__gray block__header-text">
                        Взыскание долгов с физических и юридических лиц с гарантией
                    </span>
                </p>

            </Col>
        )
    }
}