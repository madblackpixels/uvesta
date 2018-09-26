import React, { Component } from 'react'

// bootstrap
import { Col, Image } from 'react-bootstrap'


// code
export default class Client__Icon extends Component {

    state = {
      client_img : this.props.client.logo_black
    };

    render() {

        return(
            <Col xs={6} sm={4} md={4} lg={4} >
                <a href={'/'} className="link-client-logo">

                    <Image src={this.state.client_img} className="client-logo__black"
                        onMouseEnter={() => {
                            this.setState({
                                client_img : this.props.client.logo_color
                            })
                        }}
                        onMouseOut={() => {
                            this.setState({
                                client_img : this.props.client.logo_black
                            })
                        }}
                    />
                    
                </a>
            </Col>
        )
    }

}