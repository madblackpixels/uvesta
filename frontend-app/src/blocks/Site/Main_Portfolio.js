import React, { Component } from 'react'

// bootstrap
import {Grid, Row} from 'react-bootstrap'

// components
import Portfolio__Slider from '../../components/Portfolio__Slider'


// code
export default class Main_Portfolio extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <Row className="no-padding background-color__bright-red">
                    <div id="triangle-top-left__white__bold"></div>
                </Row>

                <Grid fluid={true} className="no-padding background-color__bright-red">
                    <Grid>
                        <h2 className="text-center text-color__white">ВОЗВРАЩЕННЫЕ ДОЛГИ НАШИМ КЛИЕНТАМ</h2>
                        <Row className="block__content-part block-contact__content">
                            <Portfolio__Slider />
                        </Row>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}