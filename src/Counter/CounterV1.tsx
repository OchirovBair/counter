import React from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";

type CounterV1PropsType = {
    incButtonError: boolean
    resetButtonError: boolean
    isValueSet: boolean
    counterValue: number
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: () => void
    defaultStartValue: number
    defaultMaxValue: number
    getSettingError: (error: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
    setChooseV: (ver: string) => void
    setCounterValue: (value: number) => void
    error: boolean
    version: string
    setDefaultMaxValue: (value: number) => void
    setDefaultStartValue: (value: number) => void
}

export const CounterV1 = ({
                              setCounterValue,
                              counterValue,
                              isValueSet,
                              setIsValueSet,
                              getSettingError,
                              setChooseV,
                              incButtonError,
                              setSettings,
                              resetButtonError,
                              increaseNumber,
                              resetNumber,
                              defaultStartValue,
                              defaultMaxValue,
                              error,
                              version,
                              setDefaultStartValue,
                              setDefaultMaxValue
                          }: CounterV1PropsType) => {
    return (
        <>
            {isValueSet
                ? <CounterDisplay
                    incButtonError={incButtonError}
                    resetButtonError={resetButtonError}
                    counterValue={counterValue}
                    increaseNumber={increaseNumber}
                    error={error}
                    isValueSet={isValueSet}
                    setSettings={setSettings}
                    resetNumber={resetNumber}
                    version={version}/>
                : <CounterSettings
                    defaultStartValue={defaultStartValue}
                    defaultMaxValue={defaultMaxValue}
                    setDefaultStartValue={setDefaultStartValue}
                    setDefaultMaxValue={setDefaultMaxValue}
                    setIsValueSet={setIsValueSet}
                    getSettingError={getSettingError}
                    setChooseV={setChooseV}
                    setCounterValue={setCounterValue}/>}
        </>
    );
};