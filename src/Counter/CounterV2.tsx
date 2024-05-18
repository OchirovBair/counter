import React from 'react';
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {Button} from "../components/Button/Button";
import {useDispatch} from "react-redux";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";

export const CounterV2 = () => {
    const dispatch = useDispatch()
    const chooseButtonHandler = () => {
        dispatch(changeVersionAC(VersionType.NONE))
    }
    return (
        <>
            <div style={{position: "absolute", top: '20px', right: '20px'}}>
                <Button onClick={chooseButtonHandler}>choose version</Button>
            </div>

            <CounterSettings/>
            <CounterDisplay/>
        </>
    );
};