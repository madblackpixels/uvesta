import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap'

// components


// logic
import { sendPOSTRequest } from '../../logic/General_ApiReq'

// code
export default class Main_LeadBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            leadName: '',
            leadMail: '',
            leadText: '',

        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update_leadStates = (val) => {
        this.setState(val);
    };

    handleSubmit(event) {
        event.preventDefault();

        let data = {
            name: this.state.leadName,
            mail: this.state.leadMail,
            text: this.state.leadText,
        };

        sendPOSTRequest('/send_lead/', data);
        this.child.clearForm();
        this.props.addNotification(
            'info',
            this.props.content.main_lead_modal_title,
            this.props.content.main_lead_modal_body,
        );
    };


    render() {

        return(
            <Grid fluid={true} className="background-color__blood-red no-padding">
                <Row className="no-padding no-magrin background-color__bright-red">
                   <div id="triangle-bottomright__bold-blood"></div>
                </Row>

                <Grid className="block__lead">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <p className="text-color__white block__lead-call-action">
                                Оставьте заявку прямо сейчас на бесплатную консультацию специалиста
                                и получите:
                            </p>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} className="text-color__white">
                            hell
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={6} md={8} lg={8}>
                            <ul>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__white glyphicon__margin"/>
                                    <span className="text-color__white">
                                        Бесплатный анализ всех документов и ситуации по вашему делу.
                                    </span>
                                </li>
                                <li>
                                    <Glyphicon glyph="ok" className="text-color__white glyphicon__margin"/>
                                    <span className="text-color__white">
                                        Бесплатную проверку должника на платежеспособность по специальным базам.
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4} className="text-color__white">
                            hell
                        </Col>
                    </Row>
                </Grid>

                <Row className="no-padding no-magrin background-color__bright-red">
                    <div id="triangle-top-left"></div>
                </Row>

            </Grid>
        )
    }
}