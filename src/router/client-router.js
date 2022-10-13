import React from 'react'
import { Switch, Route } from 'react-router-dom'

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";
import { clientDashboardLocations, productsLocations, smsLocations } from './fws-client-path-locations';
import clientIndex from '../views/dashboard/client-index';
import SmsDescription from '../components/fws-clients/fws-sms-description';
import Products from '../components/fws-clients/fws-product-list';
import CreateSms from '../components/fws-clients/fws-install-sms';


const ClientRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>
                {/* dashboard */}
                <Route exact path="/" component={clientIndex}></Route>
                        <Route path={clientDashboardLocations.dashboard} exact component={clientIndex} />
                    {/* products */}
                     <Route path={productsLocations.products} exact component={Products} /> 
                       {/* smservice */}
                    <Route path={smsLocations.sms} exact component={SmsDescription}/>
                    <Route path={smsLocations.createSms} exact component={CreateSms}/>
                    {/* <Route path={smsLocations.createSms}  exact component={userProfileEdit}/> */}
                 </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default ClientRouter
