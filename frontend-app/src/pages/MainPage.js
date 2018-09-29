import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'

// blocks
import Main_IntroBlock   from '../blocks/Site/Main_IntroBlock'
import Main_LeadBlock    from '../blocks/Site/Main_LeadBlock'
import Main_Team         from '../blocks/Site/Main_Team'
import Main_Portfolio    from '../blocks/Site/Main_Portfolio'
import Main_Feedback     from '../blocks/Site/Main_Feedback'
import Main_Contacts     from '../blocks/Site/Main_Contacts'

// logic
import { getSimpleData }    from '../logic/General_ApiReq'


// code
export default class MainPage extends Component {

    state = {
        sections: [],
    };


    updateContent() {
        getSimpleData("/sections_list").then(result => this.setState({
            sections: result
        }))
    };


    componentWillMount() {
        this.updateContent()
    };


    render() {

        return(
            <Grid fluid={true} className="no-padding">
                {this.state.sections.map(item => {
                    if (item.section === 'Интро' && item.status === 'on') {
                        return <Main_IntroBlock key={item.id} title={item.title} />
                    }
                })}

                {this.state.sections.map(item => {
                    if (item.section === 'Генератор лидов' && item.status === 'on') {
                        return <Main_LeadBlock key={item.id} title={item.title} />
                    }
                })}

                {this.state.sections.map(item => {
                    if (item.section === 'Команда' && item.status === 'on') {
                        return <Main_Team key={item.id} title={item.title} />
                    }
                })}

                {this.state.sections.map(item => {
                    if (item.section === 'Портфолио' && item.status === 'on') {
                        return <Main_Portfolio key={item.id} title={item.title} />
                    }
                })}

                {this.state.sections.map(item => {
                    if (item.section === 'Форма для связи' && item.status === 'on') {
                        return <Main_Feedback key={item.id} title={item.title} addNotification={this.props.addNotification} />
                    }
                })}

                {this.state.sections.map(item => {
                    if (item.section === 'Контакты' && item.status === 'on') {
                        return <Main_Contacts key={item.id} title={item.title} />
                    }
                })}
            </Grid>
        )
    }
}