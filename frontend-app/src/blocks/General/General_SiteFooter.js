import React, { Component } from 'react'

// bootstrap
import { Grid, Image } from 'react-bootstrap'


// code
export default class General_SiteFooter extends Component {

    render() {

        return(
            <Grid fluid={true} className="background-color__blood-red">
                <Grid className="block__footer text-center text-color__white">
                    <p>© "ООО" ЮВЕСТА 2018.</p>
                    <p className="no-magrin">
                        <span>Разработано в студии </span>
                        <a href="https://madblackpixels.com" className="text-color__white madblackpixels">
                            MadBlackPixels
                        </a>
                        <span>.</span>
                    </p>
                </Grid>
            </Grid>
        )
    }
}