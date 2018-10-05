import React, { Component } from 'react'

// bootstrap
import {Col, Glyphicon} from 'react-bootstrap'


// code
export default class Contacts__Address extends Component {

    render() {

        return(
            <Col xs={12} sm={4} md={4} lg={4} className="block-contact__address-list">
                <ul>
                    <li>
                        <Glyphicon glyph="earphone" className="text-color__bright-red glyphicon__margin"/>
                        <span className="text-color__blood-red text-bold">
                            {this.props.content.phone}
                        </span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Glyphicon glyph="map-marker" className="text-color__bright-red glyphicon__margin"/>
                        <span className="text-color__blood-red text-bold">
                            {this.props.content.address}
                        </span>
                    </li>
                </ul>
            </Col>
        )
    }

}