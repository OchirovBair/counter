import React from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {useDispatch} from "react-redux";
import {Button} from "../components/Button/Button";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";
import {useAppSelector} from "../hooks/hooks";
import {counterSelectors} from "../state/selectors";


export const CounterV1 = () => {
    const isValueSet = useAppSelector(counterSelectors.isValueSet)
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