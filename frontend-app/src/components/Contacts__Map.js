import React, { Component } from 'react'
import { YMaps, Map, GeoObject } from 'react-yandex-maps';

// bootstrap
import {Col, } from 'react-bootstrap'




// code
export default class Contacts__Map extends Component {

    state = { showMap: true };
    mapState = {
        center: [55.629730, 37.911950],
        zoom: 14,
        controls: [],

    };

    render() {
        const { showMap } = this.state;

        return(
            <Col xs={12} sm={8} md={8} lg={8} className="ya-maps__border">
                <YMaps>
                    <div id="map-basics">
                        {
                            showMap &&
                            <Map width="100%" state={this.mapState} >
                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: [55.629730, 37.911950],
                                    }}

                                />
                            </Map>
                        }
                    </div>
                </YMaps>
            </Col>
        )
    }

}