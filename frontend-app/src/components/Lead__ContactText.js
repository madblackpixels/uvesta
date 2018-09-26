import React, { Component } from 'react'

// bootstrap
import { Col, Button } from 'react-bootstrap'

// logic
import {
    validateInput__Text,
    validateInput__Mail,
    validateInput__TextField
} from '../logic/General_FormValidate'


// code
export default class Lead__ContactText extends Component {
    isEnabled = false;

    render() {

        const { leadName, leadMail, leadText } = this.props.data;
        this.isEnabled =
            validateInput__Text(leadName) &&
            validateInput__Mail(leadMail) &&
            validateInput__TextField(leadText);

        return(
            <Col sm={12} md={4}>

                <Col lg={12} lgHidden={true} mdHidden={true} className="block_lead__info">
                    <Button type="submit" className="btn_form btn_form__lead" disabled={!this.isEnabled}>
                        {this.props.content.main_lead_submit_btn}
                    </Button>
                </Col>

                <Col md={12} sm={6} xs={12} className="block_lead__info">
                    <h4><strong>hello@madblackpixels.com</strong></h4>
                    <p className="text-color__gray">{this.props.content.main_lead_hello_description}</p>
                </Col>

                <Col md={12} sm={6} xs={12} className="block_lead__info">
                    <h4><strong>join@madblackpixels.com</strong></h4>
                    <p className="text-color__gray">{this.props.content.main_lead_join_description}</p>
                </Col>

                <Col lg={12} smHidden={true} xsHidden={true} className="block_lead__info">
                    <Button type="submit" className="btn_form btn_form__lead" disabled={!this.isEnabled} >
                        {this.props.content.main_lead_submit_btn}
                    </Button>
                </Col>
            </Col>
        )

    }

}