import {createStore, combineReducers} from 'redux'
import { authReducer } from './reducers/auth-reducer'
import Mode from './setting/setting'
export default createStore(
    combineReducers({
        mode: Mode,
        auth: authReducer,
    })
)

