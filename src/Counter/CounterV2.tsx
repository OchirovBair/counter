import React from 'react';
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";

type CounterV2PropsType = {

}

export const CounterV2 = ({}: CounterV2PropsType) => {
    return (
        <>
            <CounterSettings/>
            <CounterDisplay/>
        </>
    );
};