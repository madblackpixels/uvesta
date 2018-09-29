import React, { Component } from 'react'
import ContentEditable from 'react-contenteditable'
import InputMask from 'react-input-mask';

// bootstrap
import { Row, Col, Checkbox, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

// logic
import { sendPOSTRequest } from '../logic/General_ApiReq'
import {
    validateInput__Text,
    validateInput__Mail,
    validateInput__TextField,
    validateInput__Phone
} from '../logic/General_FormValidate'


// code
export default class Feedback__Feedback extends Component {

    constructor() {
        super();

        this.state = {
            leadPhone: "",
            leadName:  "",
            leadMail:  "",
            leadText:  "",
            leadType:  "",

            receiptIsChecked:  false,
            contractIsChecked: false,
            decisionIsChecked: false,
            listIsChecked:     false,
            otherIsChecked:    false,
        };

        this.update_leadPhone = this.update_leadPhone.bind(this);
        this.update_leadName  = this.update_leadName.bind(this);
        this.update_leadMail  = this.update_leadMail.bind(this);
        this.update_leadText  = this.update_leadText.bind(this);

        this.handleChange_receipt  = this.handleChange_receipt.bind(this);
        this.handleChange_contract = this.handleChange_contract.bind(this);
        this.handleChange_decision = this.handleChange_decision.bind(this);
        this.handleChange_list     = this.handleChange_list.bind(this);
        this.handleChange_other    = this.handleChange_other.bind(this);
    };


    // Inputs handlers
    update_leadName = (e) => {
        this.setState({leadName: e.target.value});
    };
    update_leadMail = (e) => {
        this.setState({leadMail: e.target.value});
    };
    update_leadText = (e) => {
        this.setState({leadText: e.target.value});
    };
    update_leadPhone = (e) => {
        this.setState({leadPhone: e.target.value});
    };


    // Checkboxes handlers
    handleChange_receipt(e) {
        this.setState({receiptIsChecked: e.target.checked });
    };
    handleChange_contract(e) {
        this.setState({contractIsChecked: e.target.checked });
    };
    handleChange_decision(e) {
        this.setState({decisionIsChecked: e.target.checked });
    };
    handleChange_list(e) {
        this.setState({listIsChecked: e.target.checked });
    };
    handleChange_other(e) {
        this.setState({otherIsChecked: e.target.checked });
    };


    // clear form after POST request
    clearForm() {
        this.setState({
            leadPhone: "",
            leadName:  "",
            leadMail:  "",
            leadText:  "",

            receiptIsChecked:  false,
            contractIsChecked: false,
            decisionIsChecked: false,
            listIsChecked:     false,
            otherIsChecked:    false,
        });
    };


    // send post request
    handleSubmit(event) {
        event.preventDefault();

        let data = {
            name:  this.state.leadName,
            mail:  this.state.leadMail,
            text:  this.state.leadText,
            phone: this.state.leadPhone,

            receipt:  this.state.receiptIsChecked,
            contract: this.state.contractIsChecked,
            decision: this.state.decisionIsChecked,
            list:     this.state.listIsChecked,
            other:    this.state.otherIsChecked,
        };

        console.log(data);

        sendPOSTRequest('/send_feedback/', data);
        this.clearForm();

        // send notify
        this.props.addNotification(
            'info',
            "qwerty",
            "qwerty",
        );
    };


    render() {

        const { leadName, leadMail, leadText, leadPhone } = this.state;
        console.log(leadName);
        this.isEnabled =
            validateInput__Text(leadName) &&
            validateInput__Mail(leadMail) &&
            validateInput__Phone(leadPhone) &&
            validateInput__TextField(leadText);


        return(

            <form onSubmit={this.handleSubmit.bind(this)}>
                <Row>


                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <p className="text-color__gray">
                            <span className="text-bold">
                                Отметьте документы подтверждающие долг
                            </span>
                        </p>
                        <Checkbox checked={this.state.receiptIsChecked} onChange={this.handleChange_receipt}>
                            <span className="text-color__blood-red text-bold">
                                Расписка
                            </span>
                        </Checkbox>
                        <Checkbox checked={this.state.contractIsChecked} onChange={this.handleChange_contract}>
                            <span className="text-color__blood-red text-bold">
                                Договор
                            </span>
                        </Checkbox>
                        <Checkbox checked={this.state.decisionIsChecked} onChange={this.handleChange_decision}>
                            <span className="text-color__blood-red text-bold">
                                Судебное решение
                            </span>
                        </Checkbox>
                        <Checkbox checked={this.state.listIsChecked} onChange={this.handleChange_list}>
                            <span className="text-color__blood-red text-bold">
                                Исполнительный лист
                            </span>
                        </Checkbox >
                        <Checkbox checked={this.state.otherIsChecked} onChange={this.handleChange_other}>
                            <span className="text-color__blood-red text-bold">
                                Другой документ
                            </span>
                        </Checkbox>
                    </Col>


                    <Col xs={12} sm={8} md={8} lg={8} className="">
                        <FormGroup controlId="lead_text" validationState={validateInput__Text(this.state.leadText)} >
                            <ControlLabel className="text-color__gray">Краткая история долга</ControlLabel>
                            <ContentEditable
                                html={this.state.leadText}
                                onChange={this.update_leadText}
                                tagName="article"
                                className="form-textarea"
                            />
                        </FormGroup>
                    </Col>


                </Row>
                <Row>


                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <FormGroup controlId="lead_name" validationState={validateInput__Text(this.state.leadName)} >
                            <FormControl
                                value={this.state.leadName}
                                onChange={this.update_leadName}
                                type="text"
                                placeholder="Имя"
                            />
                        </FormGroup>
                    </Col>


                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <FormGroup controlId="lead_phone" validationState={validateInput__Phone(this.state.leadPhone)} >
                            <InputMask
                                className="form-control"
                                value={this.state.leadPhone}
                                onChange={this.update_leadPhone}
                                type="text"
                                mask="+7 (999) 999 99 99"
                                maskChar=" "
                                placeholder="Телефон"
                            />
                        </FormGroup>
                    </Col>


                    <Col xs={12} sm={4} md={4} lg={4} className="">
                        <FormGroup controlId="lead_mail" validationState={validateInput__Mail(this.state.leadMail)} >
                            <FormControl
                                value={this.state.leadMail}
                                onChange={this.update_leadMail}
                                type="text"
                                placeholder="Email"
                            />
                        </FormGroup>
                    </Col>


                </Row>
                <Row className="text-center">
                    <Button type="submit" disabled={!this.isEnabled}>Получить бесплатный анализ ситуации</Button>
                </Row>
            </form>
        )
    }

}