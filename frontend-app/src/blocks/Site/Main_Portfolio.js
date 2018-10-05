import React, { Component } from 'react'

// bootstrap
import {Grid, Row} from 'react-bootstrap'

// components
import Portfolio__Slider from '../../components/Portfolio__Slider'

// logic
import { getSimpleData } from "../../logic/General_ApiReq";


// code
export default class Main_Portfolio extends Component {

    state = {
        content: [],
        load: false
    };

    updateContent() {
        getSimpleData("/portfolio_data").then(result => this.setState({
            content: result,
            isLoad: true,    // waiting server response
        }))
    };

    componentWillMount() {
        this.updateContent()
    };


    render() {

        return(

            <Grid fluid={true} className="no-padding block__portfolio_wall">
                <Row className="no-padding no-magrin ">
                    <div id="triangle-top-left__white__bold"></div>
                </Row>

                <Grid fluid={true} className="no-padding  ">
                    <Grid>
                        <h2 className="text-center text-color__white">{this.props.title}</h2>
                        <Row className="block__content-part block-contact__content">
                            { this.state.isLoad ? <Portfolio__Slider content={this.state.content}/> : null }
                        </Row>
                    </Grid>
                </Grid>

                <Row className="no-padding no-magrin ">
                    <div id="triangle-top-right__white"></div>
                </Row>
            </Grid>
        )
    }

}