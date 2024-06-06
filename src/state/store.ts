import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer/counterReducer";
import {chooseVersionReducer} from "./chooseReducer/chooseVersionReducer";
import {saveState} from "../utils/localStorage";



const rootReducer = combineReducers({
    counter: counterReducer,
    chooseVersion: chooseVersionReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer)

store.subscribe(() => {
    saveState(store.getState().counter);
});

export type AppRootStateType = ReturnType<typeof rootReducer>

