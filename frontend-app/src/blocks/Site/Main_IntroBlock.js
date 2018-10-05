import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col, Glyphicon, Image } from 'react-bootstrap'

// logic
import { getSimpleData } from '../../logic/General_ApiReq'


// code
export default class Main_IntroBlock extends Component {

    state = {
        content: {},
        content_ul: []
    };

    updateContent() {
        getSimpleData("/intro_data").then(result => this.setState({
            content: result[0]
        }));
    };

    updateContentUl() {
        getSimpleData("/intro_data_ul").then(result => this.setState({
            content_ul: result
        }));
        console.log(this.state.content_ul)
    };

    componentWillMount() {
        this.updateContent();
        this.updateContentUl();
    };


    render() {

        return(
            <Grid fluid={true} className="no-padding">
                <Grid>
                    <Row className="block__content-part block-intro_wall">
                        <Col xs={12} sm={12} md={6} lg={8}>
                            <h1 className="text-color__bright-red">
                                {this.props.title}
                            </h1>
                            <h2 className="text-color__blood-red">
                                {this.state.content.title}
                            </h2>
                            <h3 className="text-color__bright-red">
                                {this.state.content.subtitle}
                            </h3>
                            <ul>
                                {this.state.content_ul.map(item => (
                                    <li key={item.id}>
                                        <Glyphicon glyph="ok" className="text-color__bright-red glyphicon__margin"/>
                                        <span className="text-color__blood-red">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}