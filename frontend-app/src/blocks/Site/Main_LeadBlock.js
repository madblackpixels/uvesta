import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Glyphicon, FormGroup, FormControl, Button } from 'react-bootstrap'

// common
import {
    Link,
    DirectLink
} from 'react-scroll'


// logic
import {getSimpleData, sendPOSTRequest} from '../../logic/General_ApiReq'
import {
    validateInput__Mail,
    validateInput__Text,
} from "../../logic/General_FormValidate";


// code
export default class Main_LeadBlock extends Component {

    constructor() {
        super();

        this.state = {
            leadName:  "",
            leadMail:  "",
            content:   []
        };

        this.update_leadName  = this.update_leadName.bind(this);
        this.update_leadMail  = this.update_leadMail.bind(this);

    };

    updateContent() {
        getSimpleData("/lead_data").then(result => this.setState({
            content: result
        }));
    };

    componentWillMount() {
        this.updateContent();
    };

    // Inputs handlers
    update_leadName = (e) => {
        this.setState({leadName: e.target.value});
    };
    update_leadMail = (e) => {
        this.setState({leadMail: e.target.value});
    };

    // clear form after POST request
    clearForm() {
        this.setState({
            leadName:  "",
            leadMail:  "",
        });
    };

    // send post request
    handleSubmit(event) {
        event.preventDefault();

        let data = {
            name:  this.state.leadName,
            mail:  this.state.leadMail,
        };

        sendPOSTRequest('/send_lead/', data);
        this.clearForm();

        // send notify
        this.props.addNotification(
            'info',
            "Спасибо!",
            "Мы с Вами обязательно свяжемся.",
        );
    };


    render() {

        const { leadName, leadMail } = this.state;
        this.isEnabled =
            validateInput__Text(leadName) &&
            validateInput__Mail(leadMail);

        return(

            <Grid fluid={true} className="background-color__blood-red no-padding">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <Grid className="block-content">
                        <Row>
                            <Col xs={12} sm={6} md={6} lg={6}>
                                <p className="text-color__white block__lead-call-action">
                                    <b dangerouslySetInnerHTML={{__html: this.props.title}}/>
                                </p>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} className="text-color__white">
                                <Col xs={12} sm={12} md={6} lg={6} className="">
                                    <FormGroup controlId="lead_name" validationState={validateInput__Text(this.state.leadName)} >
                                        <FormControl
                                            value={this.state.leadName}
                                            onChange={this.update_leadName}
                                            type="text"
                                            placeholder="Имя"
                                            autoComplete="off"
                                            className="no-border"
                                    />
                                    </FormGroup>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="">
                                    <FormGroup controlId="lead_mail" validationState={validateInput__Mail(this.state.leadMail)} >
                                        <FormControl
                                            value={this.state.leadMail}
                                            onChange={this.update_leadMail}
                                            type="text"
                                            placeholder="Email"
                                            autoComplete="off"
                                            className="no-border"
                                        />
                                    </FormGroup>
                                </Col>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md={8} lg={8}>
                                <ul>
                                    {this.state.content.map(item => (
                                        <li key={item.id}>
                                            <Glyphicon glyph="ok" className="text-color__white"/>
                                            <span className="text-color__white" dangerouslySetInnerHTML={{__html: item.text_field}}/>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4} className="text-color__white lead_btn_pos">
                                <Button className="lead_btn" type="submit" disabled={!this.isEnabled}>Получить консультацию</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={12} className="text-color__white free_btn_pos">
                                <Link
                                    to="Feedback"
                                    spy={true}
                                    smooth={true}
                                    duration={1500}
                                    offset={-150}
                                    className="lead_btn btn btn-default"
                                    type="submit">
                                    Получить бесплатный анализ
                                </Link>
                            </Col>
                        </Row>
                    </Grid>
                </form>
                <Row className="no-padding no-magrin background-color__bright-red">
                    <div id="block-lead__triangle-bottom"></div>
                </Row>

            </Grid>
        )
    }
}