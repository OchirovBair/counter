import React from 'react';
import {VersionType} from "../state/chooseReducer/chooseVersionReducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";



export const Counter = () => {
    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)
    const version = useSelector<AppRootStateType, VersionType>(state => state.chooseVersion.version)

    return (
        version === 'v1'
            ? isValueSet
                ? <CounterDisplay/>
                : <CounterSettings/>
            : <>
                <CounterSettings/>
                <CounterDisplay/>
            </>
    )
};




















// У меня один редьюсер, 4 экшена, 1 мидлваре.
//     Начальные значения:
//     const initialState = {
//         maxValue: 10,
//         defaultValue: 0,
//         alarmValue: 5,
//         statusMessage: STATUS.PENDING,
//         count: 0,
//     };
// Состояние приложения:
//     export enum STATUS {
//         MAX_LESS_0 = "Max value can't be less than 0",
//         DEF_LESS_0 = "Default value can't be less than 0",
//         ALARM_LESS_0 = "Alarm value can't be less than 0",
//         EQUAL = "Values can't be equal",
//         MAX_LESS_DEF = "Max value can't be less then default value",
//         PENDING = "Set values",
//         EMPTY = "none",
//     }
// 4 Экшена: increment, reset, setCount, setConditions
// 1 миддлвэре, который проверяет текущий стейт и задает состояние приложения

// Я затупил и вот это, когда красненьким цифра зажигается, у меня тоже менять можно. Потом решил уже не убирать.