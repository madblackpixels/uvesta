import React, { Component } from 'react'
import InputMask from 'react-input-mask';

// bootstrap
import { Modal, Row, Col, Checkbox, Button, FormGroup, Grid, Glyphicon } from 'react-bootstrap'

// logic
import { sendPOSTRequest }    from '../logic/General_ApiReq'
import {validateInput__Phone} from '../logic/General_FormValidate'



export default class Page__PhoneModal extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleHide = this.handleHide.bind(this);
        this.update_leadPhone = this.update_leadPhone.bind(this);
        this.handleChange_IsChecked  = this.handleChange_IsChecked.bind(this);

        this.state = {
            show: false,
            leadPhone: "",
            IsChecked: true
        }
    }

    handleHide() {
        this.setState({
            show: false,
        });
    };

    update_leadPhone = (e) => {
        this.setState({leadPhone: e.target.value});
    };

    handleChange_IsChecked(e) {
        this.setState({IsChecked: e.target.checked });
    };

    clearForm() {
        this.setState({
            leadPhone: "",
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        let data = {
            phone: this.state.leadPhone,
        };

        sendPOSTRequest('/lead_phone/', data);
        this.clearForm();
        this.handleHide()
    };


    fn = function() {
        this.setState({
            show: true,
        });
    };

    render() {

        const { leadPhone, IsChecked } = this.state;
        this.isEnabled = validateInput__Phone(leadPhone) && IsChecked;

        return(
            <Grid style={{position:"relative"}}>
                <a onClick={() => this.fn()} className="modal_phone">
                    <div className="brand-logo__phone" >
                        <span className="text-color__white">
                            <Glyphicon glyph="earphone" style={{paddingRight:"8px"}} className="modal__phone-icon"/>
                        </span>
                    </div>
                </a>

                <Modal show={this.state.show} onHide={this.handleHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <span>
                                <h4 className="text-color__blood-red">
                                    У Вас есть вопросы? Мы можем Вам перезвонить.
                                </h4>
                                <h5>Проконсультируем Вас по всем вопросам совершенно бесплатно!</h5>
                            </span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <Col xs={8} md={8} className="modal-phone">
                                <FormGroup
                                    controlId="lead_phone"
                                    validationState={validateInput__Phone(this.state.leadPhone)}
                                    style={{ margin: "0", }}
                                >
                                    <InputMask
                                        className="form-control"
                                        value={this.state.leadPhone}
                                        onChange={this.update_leadPhone}
                                        type="text"
                                        mask="+7 (999) 999 99 99"
                                        maskChar=" "
                                        placeholder="Телефон"
                                        style={{
                                            height: "48px",
                                            fontSize: "16px"
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs={4} md={4} className="modal-phone">
                                <Button type="submit" disabled={!this.isEnabled} className="modal-btn">Позвоните мне</Button>
                            </Col>
                            <Col xs={12} className="olp">
                                <Checkbox checked={this.state.IsChecked} onChange={this.handleChange_IsChecked}>
                                    <span className="text-color__gray modal-policy">
                                        Отправляя данное сообщение, вы подтверждаете свое согласие на обработку персональных данных на условиях
                                        <a href='/policy'> Политики конфиденциальности.</a>
                                    </span>
                                </Checkbox>
                            </Col>
                        </form>
                        </Row>
                    </Modal.Body>
                </Modal>
            </Grid>
        )
    }
}