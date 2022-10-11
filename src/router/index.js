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
import CountryList from '../components/location-lookup/list-country'
import StateList from '../components/location-lookup/list-state'
import CityList from '../components/location-lookup/list-city'
import AddCountry from '../components/location-lookup/add-country'
import AddState from '../components/location-lookup/add-state'
import AddCity from '../components/location-lookup/add-city'

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
                            component={SignIn}></Route>

                        <Route path={"/dashboard"}
                            component={Default}></Route>

                        <Route path={authLocations.login} component={SignIn}></Route>
                        
                     <Route path={authLocations.firstTimeLogin} component={FirstTimeLoginPassswordChange}></Route>

                     <Route path={locationLocations.country} component={CountryList}></Route> 
                     <Route path={locationLocations.state} component={StateList}></Route> 
                     <Route path={locationLocations.city} component={CityList}></Route> 
                     <Route path={locationLocations.addCountry} component={AddCountry}></Route> 
                     <Route path={locationLocations.addState} component={AddState}></Route> 
                     <Route path={locationLocations.addCity} component={AddCity}></Route> 

                        <Route path="/errors" component={Simple}></Route>
                    </>
                }
            </Switch>
        </>
    )
}

export default IndexRouters
