import React, { Component } from 'react'

import { Image } from 'react-bootstrap'


// code
export default class BrandLogo extends Component {
    render() {
        return(
            <a href={'/'}>
                <Image src="./logo-black.png" className="brand-logo__header brand-logo__black" />
                <Image src="./logo-white.png" className="brand-logo__header brand-logo__white" />
            </a>
        )
    }
}