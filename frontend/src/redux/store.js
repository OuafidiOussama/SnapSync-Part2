import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from '@redux-devtools/extension'
import Reducer from './reducers'

const initialState = {
    login: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}
const middleware = [thunk]


const store = createStore(
    Reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store