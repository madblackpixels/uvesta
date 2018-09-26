import React, { Component } from 'react'

// bootstrap
import { Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

// logic
import {
    validateInput__Text,
    validateInput__Mail,
    validateInput__TextField
} from '../logic/General_FormValidate'


// code
export default class Lead__ContactForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            leadName: '',
            leadMail: '',
            leadText: '',
        }
    };


    // clear form data parent/child states after submit
    componentDidMount()    { this.props.onRef(this) }
    componentWillUnmount() { this.props.onRef(undefined) }

    clearForm() {
        this.props.update_leadStates({
            leadName: '',
            leadMail: '',
            leadText: '',
        });

        this.setState({
            leadName: '',
            leadMail: '',
            leadText: '',
        });
    };


    // update parent LeadForm data and current Lead states for validation
    update_leadName = (e) => {
        this.props.update_leadStates({leadName: e.target.value});
        this.setState({leadName: e.target.value});
    };

    update_leadMail = (e) => {
        this.props.update_leadStates({leadMail: e.target.value});
        this.setState({leadMail: e.target.value});
    };

    update_leadText = (e) => {
        this.props.update_leadStates({leadText: e.target.value});
        this.setState({leadText: e.target.value});
    };


    render() {

        return(
            <Col sm={12} md={8}>

                <Col sm={12} md={6} className="block_lead__input">
                    <FormGroup
                        validationState={validateInput__Text(this.state.leadName)}
                        controlId="text">

                        <ControlLabel>
                            {this.props.content.main_lead_input_name}
                        </ControlLabel>

                        <FormControl
                            value={this.state.leadName}
                            onChange={this.update_leadName}
                            placeholder=">"
                            type="text"
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </Col>

                <Col sm={12} md={6} className="block_lead__input">
                    <FormGroup
                        validationState={validateInput__Mail(this.state.leadMail)}
                        controlId="mail">

                        <ControlLabel>
                            {this.props.content.main_lead_input_mail}
                        </ControlLabel>

                        <FormControl
                            value={this.state.leadMail}
                            onChange={this.update_leadMail}
                            placeholder=">"
                            type="email"
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </Col>

                <Col sm={12} className="block_lead__input">
                    <FormGroup
                        validationState={validateInput__TextField(this.state.leadText)}
                        controlId="textfield">

                        <ControlLabel>
                            {this.props.content.main_lead_input_problem}
                        </ControlLabel>

                        <FormControl
                            value={this.state.leadText}
                            onChange={this.update_leadText}
                            placeholder=">"
                            className="lead_textarea"
                            componentClass="textarea"
                            rows="5"
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </Col>

            </Col>
        )
    }
}