import React from 'react'
import Index from '../views/dashboard/index'
import {Switch,Route} from 'react-router-dom'

//TransitionGroup
import {TransitionGroup,CSSTransition} from "react-transition-group";
import { dashboardLocations, fileManagerLocations, locationLocations } from './fws-path-locations';
import ListCountry from '../components/fws-admin/location-lookup/country-location-lookpup/list-country';
import ListState from '../components/fws-admin/location-lookup/state-location-lookup/list-state';
import ListCity from '../components/fws-admin/location-lookup/city-location-lookup/list-city';
import AddCity from '../components/fws-admin/location-lookup/city-location-lookup/add-city';
import EditCountry from '../components/fws-admin/location-lookup/country-location-lookpup/edit-country';
import EditState from '../components/fws-admin/location-lookup/state-location-lookup/edit-state';
import EditCity from '../components/fws-admin/location-lookup/city-location-lookup/edit-city';
import AddCountry from '../components/fws-admin/location-lookup/country-location-lookpup/add-country'
import AddState from '../components/fws-admin/location-lookup/state-location-lookup/add-state'
import FileManager from '../components/fws-admin/file-manager/file-manager-board';
import FileList from '../components/fws-admin/file-manager/file-list';


const DefaultRouter = () => {
    return (
        <TransitionGroup>
            <CSSTransition classNames="fadein" timeout={300}>
                <Switch>
                {/* dashboard */}
                <Route exact path="/" component={Index}></Route>
                        <Route path={dashboardLocations.dashboard} exact component={Index} />
                        <Route path={locationLocations.country} component={ListCountry}></Route>
                     <Route path={locationLocations.state} component={ListState}></Route>
                     <Route path={locationLocations.city} component={ListCity}></Route>
                     <Route path={locationLocations.addCountry} component={AddCountry}></Route>
                     <Route path={locationLocations.addState} component={AddState}></Route>
                     <Route path={locationLocations.addCity} component={AddCity}></Route>
                     <Route path={locationLocations.editCountry} component={EditCountry}></Route>
                     <Route path={locationLocations.editState} component={EditState}></Route>
                     <Route path={locationLocations.editCity} component={EditCity}></Route>       
                     
                       {/* fileManager */}
                       <Route path={fileManagerLocations.fileManager} exact component={FileManager}/>
                       <Route path={fileManagerLocations.fileList} exact component={FileList}/>
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
