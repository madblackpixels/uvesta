import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'


// code
export default class Main_Portfolio extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding background-color__bright-red">
                <Grid className="block__team">
                    <h2 className="text-center text-color__white">ВОЗВРАЩЕННЫЕ ДОЛГИ НАШИМ КЛИЕНТАМ</h2>

                </Grid>
                <div id="triangle-bottomright__thin-white"></div>
            </Grid>
        )
    }

}