import React, { Component } from 'react'

// bootstrap
import { Col, Thumbnail } from 'react-bootstrap'


// code
export default class Team__Card extends Component {

    render() {

        return(
            <Col xs={12} sm={4} md={4} lg={4} className="text-center__small block-contact__address-list">
                <Thumbnail src="/system/team/team.jpg">
                    <h3 className="text-color__blood-red">
                        Thumbnail label
                    </h3>
                    <p>Description</p>
                </Thumbnail>
            </Col>
        )
    }

}