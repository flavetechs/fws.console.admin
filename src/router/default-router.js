import React from 'react'
import Index from '../views/dashboard/index'
import {Switch,Route} from 'react-router-dom'

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";
import { dashboardLocations } from './fws-path-locations';

const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>
                {/* dashboard */}
                <Route exact path="/" component={Index}></Route>
                        <Route path={dashboardLocations.dashboard} exact component={Index} />
                  {/* location */}
                     {/* <Route path="/dashboard/app/user-profile"     exact component={UserProfile} /> */}
                    {/* <Route path="/dashboard/app/user-add"         exact component={UserAdd}/>
                    <Route path="/dashboard/app/user-list"        exact component={UserList}/>
                    <Route path="/dashboard/app/user-privacy-setting" exact component={userProfileEdit}/> */}
                     {/* widget */}
                     {/* <Route path="/dashboard/widget/widgetbasic"   exact component={Widgetbasic}/>
                     <Route path="/dashboard/widget/widgetcard"    exact component={Widgetcard}/>
                     <Route path="/dashboard/widget/widgetchart"   exact component={Widgetchart}/> */}
                     {/* icon */}
                     {/* <Route path="/dashboard/icon/solid"           exact component={Solid}/>
                     <Route path="/dashboard/icon/outline"         exact component={Outline}/>
                     <Route path="/dashboard/icon/dual-tone"       exact component={DualTone}/> */}
                     {/* From */}
                     {/* <Route path="/dashboard/form/form-element"    exact component={FormElement}/>
                     <Route path="/dashboard/form/form-validation" exact component={FormValidation}/>
                     <Route path="/dashboard/form/form-wizard"     exact component={FormWizard}/> */}
                     {/* table */}
                     {/* <Route path="/dashboard/table/bootstrap-table" exact component={BootstrapTable}/>
                     <Route path="/dashboard/table/table-data"      exact component={TableData}/> */}
                     {/*special pages */}
                     {/* <Route path="/dashboard/special-pages/billing" exact component={Billing}/>
                     <Route path="/dashboard/special-pages/kanban" exact component={Kanban}/>
                     <Route path="/dashboard/special-pages/pricing" exact component={Pricing}/>
                     <Route path="/dashboard/special-pages/timeline" exact component={Timeline}/>
                     <Route path="/dashboard/special-pages/calender" exact component={Calender}/> */}
                     {/* map */}
                     {/* <Route path="/dashboard/map/vector" exact component={Vector}/>
                     <Route path="/dashboard/map/google" exact component={Google}/> */}
                     {/* extra */}
                     {/* <Route path="/dashboard/extra/privacy-policy" exact component={PrivacyPolicy}/>
                     <Route path="/dashboard/extra/terms-of-service" exact component={TermsofService}/> */}
                     {/*admin*/}
                     {/* <Route path="/dashboard/admin/admin" exact component={Admin}/> */}
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default DefaultRouter
