import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'

// blocks
import Main_IntroBlock   from '../blocks/Site/Main_IntroBlock'
import Main_LeadBlock    from '../blocks/Site/Main_LeadBlock'
import Main_Clients      from '../blocks/Site/Main_Clients'
import Main_Team         from '../blocks/Site/Main_Team'

// logic
import { getSimpleData }    from '../logic/General_ApiReq'

// code
export default class MainPage extends Component {

    state = {
        content: {},
    };


    updateContent() {
        getSimpleData("/main_page_content").then(result => this.setState({
            content: result[0][this.props.lang]
        }))
    }


    componentWillMount() {
        this.updateContent()
    };

    componentWillReceiveProps(nextState) {
        if (this.state.content !== nextState.state) {
            this.updateContent()
        }
    }


    render() {

        return(
            <Grid fluid={true} className="no-padding">
                <Main_IntroBlock />
                <Main_LeadBlock />
                <Main_Team />
            </Grid>
        )
    }
}