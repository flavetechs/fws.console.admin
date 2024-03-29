import { createStore, combineReducers } from 'redux'
import { alertReducer } from './reducers/alert-reducer'
import { authReducer } from './reducers/auth-reducer'
import { fileManagerReducer } from './reducers/file-manger-reducer'
import { locationLookupReducer } from './reducers/location-lookup-reducer'
import { productReducer } from './reducers/products-reducer'
import { smserviceReducer } from './reducers/smservice-reducer'
import Mode from './setting/setting'
export default createStore(
    combineReducers({
        mode: Mode,
        auth: authReducer,
        alert:alertReducer,
        locationLookup: locationLookupReducer,
        product: productReducer,
        smservice: smserviceReducer,
        fileManager : fileManagerReducer,
    })
)

