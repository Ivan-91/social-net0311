import { createStore, combineReducers, applyMiddleware } from "redux"
import dialogsPageReducer from "./dialogs-page-reducer"
import profilePageReducer from "./profile-page-reducer"
import usersPageReducer from "./users-page-reducer";
import thunkMiddleWare from "redux-thunk"
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reduser";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app:appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store