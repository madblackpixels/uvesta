import React, { Component } from 'react'

// bootstrap
import { Grid, Image } from 'react-bootstrap'


// code
export default class General_SiteFooter extends Component {

    render() {

        return(
            <Grid fluid={true} className="background-color__blood-red">
                <Grid className="block__footer text-center text-color__white">
                    <p>© ООО "ЮВЕСТА" 2018.</p>
                    <p className="no-magrin madblackpixels">
                        <span>Разработано в студии </span>
                        <a href="https://madblackpixels.com" className="text-color__white">
                            MadBlackPixels
                        </a>
                        <span>.</span>
                    </p>
                    <p>
                        <span className="text-color__gray modal-policy">
                            Отправляя свои данные, вы подтверждаете свое согласие на обработку персональных данных на условиях
                            <a href='/policy' className="text-color__bright-red"> Политики конфиденциальности.</a>
                        </span>
                    </p>
                </Grid>
            </Grid>
        )
    }
}