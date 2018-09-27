import React, { Component } from 'react'

// bootstrap
import { Grid, Row, Col } from 'react-bootstrap'

// components
import Header__SiteLogo     from '../../components/Header__SiteLogo'
import Header__Info         from '../../components/Header__Info'

// code
export default class Header extends Component {

    render() {
        return(
            <Grid fluid={true} className="block__header">
                <Grid>
                    <Row>

                        <Header__SiteLogo />
                        <Header__Info />

                    </Row>
                </Grid>
            </Grid>
        )
    }
}
