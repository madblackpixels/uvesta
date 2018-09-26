import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// bootstrap
import { Grid } from 'react-bootstrap'

// system general blocks
import SiteHeader from './blocks/General/General_SiteHeader'
import SlideMenu  from './blocks/General/General_SlideMenu'
import Footer     from './blocks/General/General_SiteFooter'

// notifications
import ReactNotification from "react-notifications-component";
import '../node_modules/react-notifications-component/dist/theme.css'

// pages
import MainPage from './pages/MainPage'


// code
export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            siteLang : 'data_ru',
            menuOpen : false,
        };

        this.update_AppStates = this.update_AppStates.bind(this);
        this.addNotification  = this.addNotification.bind(this);
    };


    update_AppStates(event) {
        this.setState(event);
    };

    addNotification(type, title, msg) {
        this.notificationDOMRef.addNotification({
            title: title,
            message: msg,
            type: type,
            width: 300,
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: { duration: 2500 },
            dismissable: { click: true }
        });
    }


    render() {

        return(
             <Grid fluid={true} className="no-padding">
                 <SiteHeader  update_AppStates={this.update_AppStates.bind(this)} />
                 <SlideMenu   update_AppStates={this.update_AppStates.bind(this)} menuOpen={this.state.menuOpen} />

                 <ReactNotification ref={input => this.notificationDOMRef = input} />

                 <Switch>
                     <Route path='/'
                         render={
                             (props) =>
                                 <MainPage
                                     {...props}
                                     lang={this.state.siteLang}
                                     addNotification={this.addNotification.bind(this)}
                                 />
                         }
                     />
                 </Switch>
                 <Footer />
             </Grid>
        )
    };
}
