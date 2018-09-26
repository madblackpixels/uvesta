import React, { Component } from 'react'

// bootstrap
import { Grid, Row } from 'react-bootstrap'

// components
import Client__Icon   from '../../components/Client__Icon'

// logic
import { getSimpleData } from '../../logic/General_ApiReq'


// code
export default class Main_Clients extends Component {

    state = {
        content: [],
    };

    updateContent() {
        getSimpleData("/client_block_content").then(result => this.setState({
            content: result
        }))
    };

    componentWillMount() {
        this.updateContent()
    };


    render(){

        return(

            <Grid fluid={true} className="no-padding">

                <Grid className="block__container" >
                    <h2 className="block__h2 position-right__text">Клиенты</h2>
                    <Row className="block__lead">
                        {this.state.content.map(client => (
                            <Client__Icon key={client.id} client={client} />
                        ))}
                    </Row>
                </Grid>

            </Grid>
        )
    }
}