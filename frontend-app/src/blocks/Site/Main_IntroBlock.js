import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'

// components
import Intro__Aframe from '../../components/Intro__Aframe'


// code
export default class Main_IntroBlock extends Component {

    render() {

        return(
            <Grid fluid={true} className="full-screen-height intro-block__margin no-padding">

                <Intro__Aframe />

                <Grid className="intro-block">
                    <h1 className="intro-block__h1">{this.props.content.main_intro_title}</h1>
                    <h2 className="intro-block__h2">{this.props.content.main_intro_sub_title}</h2>
                </Grid>

            </Grid>
        )
    }
}