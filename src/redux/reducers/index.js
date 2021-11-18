import { combineReducers } from 'redux'
import { routesReducer } from './routes'

export const rootReducer = combineReducers({
    routes:routesReducer
})