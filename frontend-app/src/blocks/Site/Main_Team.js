import React, { Component } from 'react'

// bootstrap
import {Grid, Row} from 'react-bootstrap'

// components
import Team__Card  from '../../components/Team__Card'
import {getSimpleData} from "../../logic/General_ApiReq";


// code
export default class Main_Team extends Component {

    state = {
        content: [],
    };

    updateContent() {
        getSimpleData("/team_data").then(result => this.setState({
            content: result
        }))
    };

    componentWillMount() {
        this.updateContent()
    };

    render() {

        return(

            <Grid fluid={true} className="no-padding">
                <Row className="no-padding no-magrin background-color__bright-red">
                    <div id="triangle-top-left"></div>
                </Row>

                <Grid fluid={true} className="no-padding">
                    <Grid className="text-center">
                        <h2 className="text-center text-color__blood-red">
                            наша команда
                        </h2>
                        <Row className="block__content-part block-team__content">

                            {this.state.content.map(item => (
                                <Team__Card team_item={item}/>
                            ))}

                        </Row>
                    </Grid>
                </Grid>

            </Grid>
        )
    }

}