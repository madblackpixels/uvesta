import React, { Component } from 'react'

// bootstrap
import { Grid, Row } from 'react-bootstrap'

// components
import Lead__ContactForm   from '../../components/Lead__ContactForm'
import Lead__ContactText   from '../../components/Lead__ContactText'

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
            <Grid fluid={true} className="no-padding">

                <Grid className="block__container">
                    <h2 className="block__h2">{this.props.content.main_lead_title}</h2>
                    <Row className="block__lead">

                        <form onSubmit={this.handleSubmit}>

                            <Lead__ContactForm
                                content={this.props.content}
                                update_leadStates={this.update_leadStates.bind(this)}
                                onRef={ref => (this.child = ref)} />
                            <Lead__ContactText content={this.props.content} data={this.state}/>

                        </form>

                    </Row>
                </Grid>

            </Grid>
        )
    }
}