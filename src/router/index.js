import React, { useState } from 'react'
//router
import { Switch, Route } from 'react-router'
//layoutpages
// import Index from '../views/index'
import Default from '../layouts/dashboard/default'
import Simple from '../layouts/dashboard/simple'
import { getUserDetails } from '../utils/permissions.js'
//import clientDefault from '../layouts/dashboard/student-default'
import SignIn from '../components/auth/sign-in'
import FirstTimeLoginPassswordChange from '../components/auth/change-password-on-login'
import { authLocations, locationLocations } from './fws-path-locations'
import ListCountry from '../components/fws-admin/location-lookup/list-country'
import ListState from '../components/fws-admin/location-lookup/list-state'
import ListCity from '../components/fws-admin/location-lookup/list-city'
import AddCountry from '../components/fws-admin/location-lookup/add-country'
import AddState from '../components/fws-admin/location-lookup/add-state'
import AddCity from '../components/fws-admin/location-lookup/add-city'
import EditCountry from '../components/fws-admin/location-lookup/edit-country'
import EditState from '../components/fws-admin/location-lookup/edit-state'
import EditCity from '../components/fws-admin/location-lookup/edit-city'
import clientDefault from '../layouts/dashboard/client-default'

const IndexRouters = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetail, setUserDetail] = useState(null);

    React.useEffect(() => {
        setUserDetail(getUserDetails());
        if (userDetail)
            setIsLoggedIn(true)
    }, [isLoggedIn]);


    return (
        <>
            <Switch>
                {
                    <>
                         <Route exact path="/"
                            component={userDetail?.userType == '0' ?  Default : clientDefault}></Route>

                        <Route path={userDetail?.userType == '0' ? "/dashboard" : '/client-dashboard'}
                            component={userDetail?.userType == '0' ?  Default : clientDefault}></Route>

                        <Route path={authLocations.login} component={SignIn}></Route>
                        
                     <Route path={authLocations.firstTimeLogin} component={FirstTimeLoginPassswordChange}></Route>
 
                     <Route path={locationLocations.country} component={ListCountry}></Route>
                     <Route path={locationLocations.state} component={ListState}></Route>
                     <Route path={locationLocations.city} component={ListCity}></Route>
                     <Route path={locationLocations.addCountry} component={AddCountry}></Route>
                     <Route path={locationLocations.addState} component={AddState}></Route>
                     <Route path={locationLocations.addCity} component={AddCity}></Route>
                     <Route path={locationLocations.editCountry} component={EditCountry}></Route>
                     <Route path={locationLocations.editState} component={EditState}></Route>
                     <Route path={locationLocations.editCity} component={EditCity}></Route>
                    

                        <Route path="/errors" component={Simple}></Route>
                    </>
                }
            </Switch>
        </>
    )
}

export default IndexRouters
