import {createStore, combineReducers} from 'redux'
import { authReducer } from './reducers/auth-reducer'
import { locationLookupReducer } from './reducers/location-lookup-reducer'
import { alertReducer } from './reducers/toaster-reducer'
import Mode from './setting/setting'
export default createStore(
    combineReducers({
        mode: Mode,
        auth: authReducer,
        locationLookup: locationLookupReducer,
        alert: alertReducer,
    })
)

