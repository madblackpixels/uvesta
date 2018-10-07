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

            <Grid fluid={true}>
                <Grid className="block-team block-content">
                    <h2 className="text-center text-color__blood-red margin__sm">
                        {this.props.title}
                    </h2>
                    <Row className="block-team__content">

                         {this.state.content.map(item => (
                             <Team__Card key={item.id} team_item={item} />
                         ))}

                    </Row>
                </Grid>
            </Grid>
        )
    }

}