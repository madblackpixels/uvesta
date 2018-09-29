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
    };

    updateContent() {
        getSimpleData("/portfolio_data").then(result => this.setState({
            content: result
        }))
    };

    componentWillMount() {
        this.updateContent()
    };


    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <Row className="no-padding no-magrin background-color__bright-red">
                    <div id="triangle-top-left__white__bold"></div>
                </Row>

                <Grid fluid={true} className="no-padding background-color__bright-red">
                    <Grid>
                        <h2 className="text-center text-color__white">ВОЗВРАЩЕННЫЕ ДОЛГИ НАШИМ КЛИЕНТАМ</h2>
                        <Row className="block__content-part block-contact__content">
                            <Portfolio__Slider content={this.state.content}/>
                        </Row>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}