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
    };

    componentWillMount() {
        this.updateContent();
        this.updateContentUl();
    };


    render() {

        return(
            <Grid fluid={true}>
                <Grid className="block-intro" style={{ backgroundImage: "url(system/intro_wall.png)"}} >
                    <Grid>
                        <Row>
                            <Col xs={12} sm={12} md={8} lg={10}>
                                <h1 className="text-color__bright-red">
                                    {this.props.title}
                                </h1>
                                <h2 className="text-color__blood-red sm_crutch">
                                    {this.state.content.title}
                                </h2>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <h3 className="text-color__bright-red">
                                    {this.state.content.subtitle}
                                </h3>
                                <ul>
                                    {this.state.content_ul.map(item => (
                                        <li key={item.id}>
                                            <Glyphicon glyph="ok" className="text-color__bright-red"/>
                                            <span className="text-color__blood-red">
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <br></br>
                                <br></br>
                            </Col>
                        </Row>
                    </Grid>
                    <Grid fluid={true} className="no-padding" className="">
                        <div id="block-intro__triangle"></div>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}