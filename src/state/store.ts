import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import {chooseVersionReducer} from "./chooseReducer/chooseVersionReducer";
import {devToolsEnhancer} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    counter: counterReducer,
    chooseVersion: chooseVersionReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer, devToolsEnhancer())

export type AppRootStateType = ReturnType<typeof rootReducer>

