import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'

// components
import Footer__SiteLogo from '../../components/Footer__SiteLogo'


// code
export default class General_SiteFooter extends Component {

    render() {

        return(
            <Grid fluid={true} className="background-color__black no-padding">
                <Grid className="block__footer text-center text-color__white">
                    <Footer__SiteLogo />
                    <span> - 2018.</span>
                </Grid>
            </Grid>
        )
    }
}