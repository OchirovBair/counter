import React, {useState} from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {CounterV1} from "./CounterV1";
import {CounterV2} from "./CounterV2";

type CounterPropsType = {
    version: string
    setChooseV: (ver: string) => void
}

export const Counter = ({version, setChooseV}: CounterPropsType) => {
    const [defaultStartValue, setDefaultStartValue] = useState(0)
    const [defaultMaxValue, setDefaultMaxValue] = useState(3)
    // const defaultStartValue = 0
    // const defaultMaxValue = 3
    // const locStorageStartValue = Number(localStorage.getItem('startValue')) || defaultStartValue
    // const locStorageMaxValue = Number(localStorage.getItem('maxValue')) || defaultMaxValue

    const [counterValue, setCounterValue] = useState<number>(defaultStartValue)
    const [error, setError] = useState(false)
    const [isValueSet, setIsValueSet] = useState(false)
    let incButtonError = counterValue >= defaultMaxValue
    let resetButtonError = counterValue <= defaultStartValue

    const increaseNumber = () => {
        setCounterValue(counterValue + 1)
    }

    const resetNumber = () => {
        setCounterValue(defaultStartValue)
    }

    const setSettings = () => {
        setIsValueSet(false)
    }

    const getSettingError = (settingError: boolean) => {
        setError(settingError)
    }

    return (
        version === 'v1'
            ? (<CounterV1
                defaultStartValue={defaultStartValue}
                defaultMaxValue={defaultMaxValue}
                setDefaultStartValue={setDefaultStartValue}
                setDefaultMaxValue={setDefaultMaxValue}
                setIsValueSet={setIsValueSet}
                getSettingError={getSettingError}
                setChooseV={setChooseV}
                setCounterValue={setCounterValue}
                incButtonError={incButtonError}
                resetButtonError={resetButtonError}
                counterValue={counterValue}
                increaseNumber={increaseNumber}
                error={error}
                isValueSet={isValueSet}
                setSettings={setSettings}
                resetNumber={resetNumber}
                version={version}
            />)
            : (<CounterV2
                defaultStartValue={defaultStartValue}
                defaultMaxValue={defaultMaxValue}
                setDefaultStartValue={setDefaultStartValue}
                setDefaultMaxValue={setDefaultMaxValue}
                setIsValueSet={setIsValueSet}
                getSettingError={getSettingError}
                setChooseV={setChooseV}
                setCounterValue={setCounterValue}
                incButtonError={incButtonError}
                resetButtonError={resetButtonError}
                counterValue={counterValue}
                increaseNumber={increaseNumber}
                error={error}
                isValueSet={isValueSet}
                setSettings={setSettings}
                resetNumber={resetNumber}
                version={version}
            />)
    )
};