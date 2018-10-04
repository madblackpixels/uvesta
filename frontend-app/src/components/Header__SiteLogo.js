import React, { Component } from 'react'

// bootstrap
import { Image, Col } from 'react-bootstrap'


// code
export default class Header__SiteLogo extends Component {

    render() {

        return(
            <Col xs={6} sm={6} md={6} lg={6} >
                <a href={'/'}>
                    <Image src="http://127.0.0.1:8000/media/system/logo.png" className="brand-logo__header" />
                </a>
            </Col>
        )
    }
}