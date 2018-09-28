import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap'


// code
export default class Main_Contacts extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding">

                <Row className="no-padding background-color__gray">
                    <div id="triangle-top-left__white__reverse"></div>
                </Row>

                <Grid fluid={true} className="no-padding background-color__gray">
                    <Grid>

                        <h2 className="text-center text-color__blood-red">КОНТАКТЫ</h2>
                        <br></br>
                        <br></br>
                        <Row>

                            <Col xs={12} sm={4} md={6} lg={6}>

                                <ul>
                                    <li>
                                        <Glyphicon glyph="map-marker" className="text-color__bright-red glyphicon__margin"/>
                                        <span className="text-color__blood-red">
                                            г. Москва,
                                            <br></br>
                                            ул. Московская, 97
                                        </span>
                                    </li>
                                </ul>
                                <br></br>
                                <ul>
                                    <li>
                                        <Glyphicon glyph="earphone" className="text-color__bright-red glyphicon__margin"/>
                                        <span className="text-color__blood-red">
                                            +7 (900) 000 00 00
                                        </span>
                                    </li>
                                </ul>

                            </Col>

                            <Col xs={12} sm={4} md={6} lg={6}>
                                hell
                            </Col>

                        </Row>

                    </Grid>
                </Grid>

            </Grid>
        )
    }

}