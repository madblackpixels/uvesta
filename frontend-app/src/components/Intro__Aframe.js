import React, { Component } from 'react'

// A-frame for VR
import 'aframe'
import 'aframe-particle-system-component';
import {Entity, Scene } from 'aframe-react';


// code /system/site_logo/logo-black.png,
export default class Intro__Aframe extends Component {

    render() {

        const pixelCount = 3500;
        const eggCount = 20;

        return(
            <Scene embedded={true}>
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: pixelCount,
                        width:.1,
                        texture: '/system/intro_textures/pixel_main.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_1.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_2.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_3.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_4.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_5.png',
                    }}
                />
                <Entity
                    particle-system={{
                        preset: 'dust',
                        particleCount: eggCount,
                        width:1,
                        texture: '/system/intro_textures/pixel_6.png',
                    }}
                />
            </Scene>

        )
    }
}

