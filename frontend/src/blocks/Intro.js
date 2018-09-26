import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import 'aframe'
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';


// code
export default class Intro extends Component {
    render() {
        return(
            <Grid fluid={true} className="background__lite-gray full-screen-height">
                <Scene embedded>
                    <Entity
                        particle-system={{
                            preset: 'dust',
                            particleCount: 5000,
                            color: '#353535',
                        }}
                    />
                </Scene>
                <Grid className="intro-block">
                    {this.props.page_text_content.map(item => (
                        <div key={item.id}>
                            <h1 className="intro-block__h1">{item.data_ru.main_title}</h1>
                            <h2 className="intro-block__h2">{item.data_ru.main_sub_title}</h2>
                        </div>
                    ))}
                </Grid>
            </Grid>
        )
    }
}