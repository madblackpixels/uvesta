import React, { Component } from 'react'

// bootstrap
import { Image, Col } from 'react-bootstrap'


// code
export default class Header__SiteLogo extends Component {

    render() {

        return(
            <Col xs={2} sm={4} md={4} lg={4} >
                <a href={'/'}>
                    <Image src="/system/logo.png" className="brand-logo__header" />
                </a>
            </Col>
        )
    }
}