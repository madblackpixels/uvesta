import React, { Component } from 'react'
import Headroom from 'react-headroom'

// bootstrap
import { Grid } from 'react-bootstrap'

// components
import Header__SiteLogo         from '../../components/Header__SiteLogo'
import Header__SiteLangBtnGroup from '../../components/Header__SiteLangBtnGroup'
import Header__SlideMenuBtn     from '../../components/Header__SlideMenuBtn'


// code
export default class Header extends Component {

    render() {
        return(
            <Headroom>
                <Grid fluid={true} className="headroom-wrapper__max_width background__black_small">

                    <Header__SiteLogo />
                    <Header__SlideMenuBtn       update_AppStates={this.props.update_AppStates} />
                    <Header__SiteLangBtnGroup   update_AppStates={this.props.update_AppStates} />

                </Grid>
            </Headroom>
        )
    }
}
