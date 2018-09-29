import React, { Component } from 'react'

// bootstrap
import { Grid, Row } from 'react-bootstrap'

// components
import Contacts__Address from '../../components/Contacts__Address'
import Contacts__Map     from '../../components/Contacts__Map'

// logic
import { getSimpleData } from '../../logic/General_ApiReq'


// code
export default class Main_Contacts extends Component {

    state = {
        content: {},
    };

    updateContent() {
        getSimpleData("/contacts_data").then(result => this.setState({
            content: result[0]
        }))
    };

    componentWillMount() {
        this.updateContent()
    };


    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <Row className="no-padding no-magrin background-color__gray">
                    <div id="triangle-top-left__white"></div>
                </Row>

                <Grid fluid={true} className="no-padding background-color__gray">
                    <Grid>
                        <h2 className="text-center text-color__blood-red">
                            {this.props.title}
                        </h2>
                        <Row className="block__content-part block-contact__content">

                            <Contacts__Address content={this.state.content} />
                            <Contacts__Map content={this.state.content} />

                        </Row>
                    </Grid>
                </Grid>

            </Grid>
        )
    }

}