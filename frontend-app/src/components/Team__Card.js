import React, { Component } from 'react'

// bootstrap
import { Col, Thumbnail } from 'react-bootstrap'


// code
export default class Team__Card extends Component {

    render() {

        return(
            <Col xs={12} sm={4} md={4} lg={4}>
                <div>
                    <Thumbnail src={this.props.team_item.image} className="thumbnail__sm">
                        <h4 className="text-color__blood-red">
                            {this.props.team_item.name}
                        </h4>
                        <p>{this.props.team_item.text}</p>
                    </Thumbnail>
                </div>
            </Col>
        )
    }

}