import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// bootstrap
import { Grid } from 'react-bootstrap'

// system general blocks
import SiteHeader from './blocks/General/General_SiteHeader'
import Footer     from './blocks/General/General_SiteFooter'

// notifications
import ReactNotification from "react-notifications-component";
import '../node_modules/react-notifications-component/dist/theme.css'

// pages
import MainPage from './pages/MainPage'
import PolicyPage from './pages/PolicyPage'


// code
export default class App extends Component {

    constructor(props) {
        super(props);

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
            dismiss: { duration: 5000 },
            dismissable: { click: true }
        });
    }


    render() {

        return(
             <Grid fluid={true} className="no-padding">
                 <SiteHeader  update_AppStates={this.update_AppStates.bind(this)} />
                 <ReactNotification ref={input => this.notificationDOMRef = input} />

                 <Switch>
                     <Route exact path='/'
                         render={
                             (props) =>
                                 <MainPage
                                     {...props}
                                     addNotification={this.addNotification.bind(this)}
                                 />
                         }
                     />

                     <Route exact path='/policy'
                         render={
                             (props) =>
                                 <PolicyPage
                                     {...props}
                                 />
                         }
                     />
                 </Switch>

                 <Footer />
             </Grid>
        )
    };
}
