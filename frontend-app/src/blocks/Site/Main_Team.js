import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'


// code
export default class Main_Team extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <div id="triangle-topleft__thin-bright-small"></div>
                <Grid className="block__team">
                    <h2 className="text-center">НАША КОМАНДА</h2>

                </Grid>
                <div id="triangle-bottomright__bold-bright"></div>
            </Grid>
        )
    }

}