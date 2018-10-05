import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col } from 'react-bootstrap'

// components
import Header__SiteLogo     from '../../components/Header__SiteLogo'
import Header__Info         from '../../components/Header__Info'
import {getSimpleData} from "../../logic/General_ApiReq";

// code
export default class Header extends Component {

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
            <Grid fluid={true} className="block__header no-padding">
                <Grid>
                    <Row>

                        <Header__SiteLogo />
                        <Header__Info content={this.state.content } />

                    </Row>
                </Grid>
                <Grid fluid={true} className="no-padding">
                    <br></br>
                    <div id="triangle-topleft__thin-bright"></div>
                    <div id="triangle-topleft__thin-blood"></div>
                </Grid>
            </Grid>
        )
    }
}
