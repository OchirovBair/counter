import React from 'react';
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";

type CounterV2PropsType = {
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

export const CounterV2 = ({
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
                          }: CounterV2PropsType) => {
    return (
        <>
            <CounterSettings
                defaultStartValue={defaultStartValue}
                defaultMaxValue={defaultMaxValue}
                setDefaultStartValue={setDefaultStartValue}
                setDefaultMaxValue={setDefaultMaxValue}
                setIsValueSet={setIsValueSet}
                getSettingError={getSettingError}
                setChooseV={setChooseV}
                setCounterValue={setCounterValue}/>
            <CounterDisplay
                incButtonError={incButtonError}
                resetButtonError={resetButtonError}
                counterValue={counterValue}
                increaseNumber={increaseNumber}
                error={error}
                isValueSet={isValueSet}
                setSettings={setSettings}
                resetNumber={resetNumber}
                version={version}/>
        </>
    );
};