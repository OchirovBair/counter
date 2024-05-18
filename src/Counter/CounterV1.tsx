import React from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

type CounterV1PropsType = {

}

export const CounterV1 = ({}: CounterV1PropsType) => {
    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)
    return (
        <>
            {isValueSet
                ? <CounterDisplay/>
                : <CounterSettings/>}
        </>
    );
};