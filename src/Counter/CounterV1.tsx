import React from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {Button} from "../components/Button/Button";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";
import {FlexWrapper} from "../components/FlexWrapper";


export const CounterV1 = () => {
    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)
    const dispatch = useDispatch()
    const chooseButtonHandler = () => {
        dispatch(changeVersionAC(VersionType.NONE))
    }
    return (
        <>
            <div style={{position: "absolute", top: '20px', right: '20px'}}>
                <Button onClick={chooseButtonHandler}>choose version</Button>
            </div>

            <>
                {isValueSet
                    ? <CounterDisplay/>
                    : <CounterSettings/>}
            </>
        </>
    );
};