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
import { authLocations } from './fws-path-locations'
import clientDefault from '../layouts/dashboard/client-default'
import Register from '../components/auth/register-user'

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
                        
                        <Route path={authLocations.register} component={Register}></Route>

                     <Route path={authLocations.firstTimeLogin} component={FirstTimeLoginPassswordChange}></Route> 
                        <Route path="/errors" component={Simple}></Route>
                    </>
                }
            </Switch>
        </>
    )
}

export default IndexRouters
