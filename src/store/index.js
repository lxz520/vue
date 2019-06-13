import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducer/home"
import reduxPro from "redux-promise-middleware"
const reducer=combineReducers({
    home
})
const store =createStore(reducer,applyMiddleware(reduxPro()))
export default store;