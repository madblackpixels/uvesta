import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'


// code
export default class General_SiteFooter extends Component {

    render() {

        return(
            <Grid fluid={true} className="background-color__blood-red">
                <Grid className="block__footer text-center text-color__white">
                    <span>разаработано в студии </span>
                    <a href="https://madblackpixels.com" className="text-color__white">
                        <b>madblackpixels</b>
                    </a>
                    <span> 2018.</span>
                </Grid>
            </Grid>
        )
    }
}