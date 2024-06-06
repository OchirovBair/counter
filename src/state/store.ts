import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import {chooseVersionReducer} from "./chooseReducer/chooseVersionReducer";
import {loadState, saveState} from "../utils/localStorage";



const rootReducer = combineReducers({
    counter: counterReducer,
    chooseVersion: chooseVersionReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer, loadState())
store.subscribe(() => {
    saveState({
        counter: store.getState().counter,
        chooseVersion: store.getState().chooseVersion
    });
});

export type AppRootStateType = ReturnType<typeof rootReducer>

