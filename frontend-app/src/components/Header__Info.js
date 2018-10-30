import React, { Component } from 'react'

// bootstrap
import { Col, Glyphicon, Row, Image } from 'react-bootstrap'


// code
export default class Header__Info extends Component {

    render() {

        return(
            <Col xs={10} sm={8} md={8} lg={8} className="text-right">
                <Row>
                    <Col xs={10} sm={8} md={9} lg={11} className="no-padding block-header__info">
                        <p className="no-magrin block-header__phone">
                            <span className="text-color__bright-red">
                                <Glyphicon glyph="earphone" style={{paddingRight:"8px"}} className="earphone__sm"/>
                            </span>
                            <span className="text-color__blood-red">
                                {this.props.content.phone}
                            </span>
                        </p>

                        <p className="no-magrin block-header__subtitle">
                            <span className="text-color__gray">
                                {this.props.content.subtitle}
                            </span>
                        </p>
                    </Col>
                    <Col xs={2} sm={1} md={1} lg={1} className="text-left">
                        <a href={'/'}>
                            <Image src="/system/phone.png" className="brand-logo__phone" />
                        </a>
                    </Col>
                </Row>
            </Col>
        )
    }
}