import {createStore, combineReducers} from 'redux'
import { authReducer } from './reducers/auth-reducer'
import { locationLookupReducer } from './reducers/location-lookup-reducer'
import { alertReducer } from './reducers/toaster-reducer'
import { productReducer } from './reducers/products-reducer'
import { smserviceReducer } from './reducers/smservice-reducer'
import Mode from './setting/setting'
export default createStore(
    combineReducers({
        mode: Mode,
        auth: authReducer,
        locationLookup: locationLookupReducer,
        alert: alertReducer,
        product:productReducer,
        smservice:smserviceReducer,
    })
)

