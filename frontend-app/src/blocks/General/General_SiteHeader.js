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
            <Grid fluid={true} className="no-padding">
                <Grid>
                    <Row className="block__header">

                        <Header__SiteLogo />
                        <Header__Info content={this.state.content } />

                    </Row>
                </Grid>
                <Grid fluid={true} className="no-padding">
                    <div id="block__header-triangle-bottom_one"></div>
                </Grid>
                <Grid fluid={true} className="no-padding">
                    <div id="block__header-triangle-bottom_two"></div>
                </Grid>
            </Grid>
        )
    }
}
