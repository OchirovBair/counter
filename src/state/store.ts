import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import {chooseVersionReducer} from "./chooseReducer/chooseVersionReducer";



const rootReducer = combineReducers({
    counter: counterReducer,
    chooseVersion: chooseVersionReducer
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

