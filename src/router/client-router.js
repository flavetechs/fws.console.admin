import React from 'react'
import { Switch, Route } from 'react-router-dom'

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";
import { clientDashboardLocations, productsLocations, smsLocations } from './fws-client-path-locations';
import clientIndex from '../views/dashboard/client-index';
import SmsDescription from '../components/fws-clients/SMS/fws-sms-description';
import UserProductDetails from '../components/fws-clients/SMS/fws-user-product-details';
import Products from '../components/fws-clients/fws-product-list';
import CreateSms from '../components/fws-clients/SMS/fws-install-sms';
import UpdateSms from '../components/fws-clients/SMS/fws-update-sms';


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
                     <Route path={productsLocations.userProductDetails} exact component={UserProductDetails} /> 
                       {/* smservice */}
                    <Route path={smsLocations.sms} exact component={SmsDescription}/>
                    <Route path={smsLocations.createSms} exact component={CreateSms}/>
                    <Route path={smsLocations.updateSms}  exact component={UpdateSms}/>
                 </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default ClientRouter
