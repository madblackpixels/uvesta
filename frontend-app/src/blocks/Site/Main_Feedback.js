import React, { Component } from 'react'

// bootstrap
import {Grid, Row} from 'react-bootstrap'

// components
import Feedback__Feedback from '../../components/Feedback__Feedback'


// code
export default class Main_Feedback extends Component {

    render() {

        return(

            <Grid fluid={true}>
                <Grid className="block-feedback">
                    <h2 className="text-center text-color__blood-red">
                        {this.props.title}
                    </h2>
                    <Row className="block-feedback__content">

                         <Feedback__Feedback addNotification={this.props.addNotification}/>

                    </Row>
                </Grid>
            </Grid>
        )
    }

}