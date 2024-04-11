import React, {useState} from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";

type CounterPropsType = {
    version: string
    setChooseV: (ver: string) => void
}

export const Counter = ({version, setChooseV}: CounterPropsType) => {
    const defaultStartValue = 0
    const defaultMaxValue = 3
    const locStorageStartValue = Number(localStorage.getItem('startValue')) || defaultStartValue
    const locStorageMaxValue = Number(localStorage.getItem('maxValue')) || defaultMaxValue

    const [counterValue, setCounterValue] = useState<number>(locStorageStartValue)
    const [error, setError] = useState(false)
    const [isValueSet, setIsValueSet] = useState(false)
    console.log(counterValue)
    let incButtonError = counterValue >= locStorageMaxValue
    let resetButtonError = counterValue <= locStorageStartValue

    const increaseNumber = () => {
        setCounterValue(counterValue + 1)
    }

    const resetNumber = () => {
        setCounterValue(locStorageStartValue)
    }

    const setSettings = () => {
        setIsValueSet(false)
    }

    const getSettingError = (settingError: boolean) => {
        setError(settingError)
    }

    return (
        version === 'v1'
            ? (<>
                {isValueSet
                    ? <CounterDisplay
                        incButtonError={incButtonError}
                        resetButtonError={resetButtonError}
                        counterValue={counterValue}
                        increaseNumber={increaseNumber}
                        settingError={error}
                        isValueSet={isValueSet}
                        setSettings={setSettings}
                        resetNumber={resetNumber}/>
                    : <CounterSettings
                        defaultStartValue={defaultStartValue}
                        defaultMaxValue={defaultMaxValue}
                        setIsValueSet={setIsValueSet}
                        getSettingError={getSettingError}
                        setChooseV={setChooseV}
                        setCounterValue={setCounterValue}/>}
            </>)
            : (<>
                <CounterSettings
                    defaultStartValue={defaultStartValue}
                    defaultMaxValue={defaultMaxValue}
                    setIsValueSet={setIsValueSet}
                    getSettingError={getSettingError}
                    setChooseV={setChooseV}
                    setCounterValue={setCounterValue}/>
                <CounterDisplay
                    incButtonError={incButtonError}
                    resetButtonError={resetButtonError}
                    counterValue={counterValue}
                    increaseNumber={increaseNumber}
                    settingError={error}
                    isValueSet={isValueSet}
                    setSettings={setSettings}
                    resetNumber={resetNumber}/>
            </>)
    )
};