import React, { Component } from 'react'

// bootstrap
import { Image } from 'react-bootstrap'


// code
export default class Footer__SiteLogo extends Component {

    render() {

        return(
            <a href={'/'} className="link-default__white">
                <Image src="/system/site_logo/logo-white.png" className="brand-logo__footer" />
                <span>madblackpixels</span>
            </a>
        )
    }

}