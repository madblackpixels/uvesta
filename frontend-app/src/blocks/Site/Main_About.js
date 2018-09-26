import React, { Component } from 'react'

// bootstrap
import { Grid } from 'react-bootstrap'


// code
export default class Main_About extends Component {

    render() {

        return(

            <Grid fluid={true} className="no-padding background-color__black">
                <Grid className="block__container">
                    <div className="text-center text-color__white">
                        {this.props.content.main_about_text}
                    </div>
                </Grid>
            </Grid>
        )
    }

}