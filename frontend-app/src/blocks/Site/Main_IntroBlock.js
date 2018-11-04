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
            <Grid fluid={true} className="no-padding">
                <Grid className="block__intro no-padding" fluid={true}>
                    <Grid style={{ position: "relative" }} fluid={true} className="no-padding">
                        <Grid>
                            <Row>
                                <Col xs={12} sm={12} md={8} lg={10}>
                                    <h1 className="block__intro-h1 text-color__bright-red">
                                        {this.props.title}
                                    </h1>
                                </Col>
                                <Col xs={8} sm={8} md={9} lg={10}>
                                    <h2 className="block__intro-h2 text-color__blood-red"
                                        dangerouslySetInnerHTML={{__html: this.state.content.title_block}}
                                    />
                                </Col>
                                <Image className="intro_wall-lg" src="system/intro_wall.png" responsive/>
                                <Image className="intro_wall-sm" src="system/small.png"  responsive/>
                                <Col xs={7} sm={7} md={8} lg={7} className="intro_ul__sm" style={{zIndex:"2"}}>
                                    <h3 className="block__intro-h3 text-color__bright-red">
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
                                </Col>
                            </Row>
                        </Grid>
                        <Grid fluid={true} className="no-padding">
                            <div id="block-intro__triangle"></div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}