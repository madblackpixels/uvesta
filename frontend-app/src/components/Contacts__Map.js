import React, { Component } from 'react'
import { YMaps, Map, GeoObject } from 'react-yandex-maps'

// bootstrap
import {Col } from 'react-bootstrap'


// code
export default class Contacts__Map extends Component {

    render() {
        const showMap = true;

        let coordinates = [
            parseFloat(this.props.content.latitude),
            parseFloat(this.props.content.longitude)
        ];

        let mapConfig = {
            center: [
                this.props.content.latitude,
                this.props.content.longitude
            ],
            zoom: 14,
            controls: [],
        };

        return(
            <Col xs={12} sm={8} md={8} lg={8} className="ya-maps__border">
                <YMaps>
                    <div id="map-basics">
                        {
                            showMap &&
                            <Map width="100%" state={mapConfig} >
                                <GeoObject
                                    geometry={{
                                        type: 'Point',
                                        coordinates: coordinates,
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