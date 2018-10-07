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

            <Grid fluid={true} className="background-color__bright-red block__portfolio_wall"
                style={{ backgroundImage: "url(system/portfolio_wall.jpg)"}}
            >
                <Grid fluid={true} className="no-padding" className="">
                    <div id="block-portfolio__triangle-top"></div>
                </Grid>

                <Grid className="block-content">
                    <h2 className="text-center text-color__white">
                        {this.props.title}
                    </h2>
                    <Row className="block-portfolio__content">
                        { this.state.isLoad ? <Portfolio__Slider content={this.state.content}/> : null }
                    </Row>
                </Grid>

                <Grid fluid={true} className="no-padding" className="">
                    <div id="block-portfolio__triangle-bottom"></div>
                </Grid>
            </Grid>

        )
    }

}