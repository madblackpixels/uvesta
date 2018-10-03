import React, { Component } from 'react'

// bootstrap
import { Col, Thumbnail } from 'react-bootstrap'


// code
export default class Team__Card extends Component {

    render() {

        return(
            <Col xs={12} sm={4} md={4} lg={4} className="text-center__small block-contact__address-list">
                <Thumbnail src={this.props.team_item.image}>
                    <h3 className="text-color__blood-red">
                        {this.props.team_item.name}
                    </h3>
                    <p>{this.props.team_item.text}</p>
                </Thumbnail>
            </Col>
        )
    }

}