import React, { Component } from 'react'

// bootstrap
import {Grid, Row} from 'react-bootstrap'

// components
import Feedback__Feedback from '../../components/Feedback__Feedback'


// code
export default class Main_Feedback extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <Row className="no-padding background-color__bright-red">
                    <div id="triangle-top-right__white"></div>
                </Row>

                <Grid fluid={true} className="no-padding">
                    <Grid>
                        <h2 className="text-center text-color__blood-red">
                            получить бесплатный анализ ситуации
                        </h2>
                        <Row className="block__content-part">

                            <Feedback__Feedback />

                        </Row>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}