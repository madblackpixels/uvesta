import React, { Component } from 'react'

// bootstrap
import { Col, Thumbnail } from 'react-bootstrap'


// code
export default class Team__Card extends Component {

    render() {

        return(
            <Col xs={12} sm={6} md={6} lg={3}>

                <Thumbnail src={this.props.team_item.image} className="thumbnail__sm text-center">
                    <h4 className="text-color__blood-red">
                        {this.props.team_item.name}
                    </h4>
                    <p className="team-description">{this.props.team_item.text}</p>
                </Thumbnail>
            </Col>
        )
    }

}