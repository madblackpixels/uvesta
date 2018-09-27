import React, { Component } from 'react'

// bootstrap
import { Image, Col } from 'react-bootstrap'


// code
export default class Header__SiteLogo extends Component {

    render() {

        return(
            <Col xs={6} sm={6} md={6} lg={6} >
                <a href={'/'}>
                    <Image src="/system/site_logo/logo-black.png" className="brand-logo__header brand-logo__black" />
                </a>
            </Col>
        )
    }
}