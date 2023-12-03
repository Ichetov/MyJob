import {applyMiddleware, combineReducers,  legacy_createStore as createStore } from "redux";
import DialogsReducer from "./dialogs-reducer";
import ProfileReducer from "./profile-reduser";
import UsersReducer from "./users-reduser";
import HeaderReducer from "./header-reducer";
import thunkMiddleware from 'redux-thunk'
import { AppReducer } from "./app-reduser";

let reducers = combineReducers({
    messagesPage: DialogsReducer,
    profile: ProfileReducer,
    users: UsersReducer,
    header: HeaderReducer,
    app: AppReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;