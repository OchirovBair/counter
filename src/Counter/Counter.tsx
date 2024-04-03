import React, {useEffect, useState} from 'react';
import {S} from "./CounterStyle";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from './CounterSettings/CounterSettings';

type CounterPropsType = {}

export const Counter = ({}: CounterPropsType) => {
    const defaultStartValue = 0
    const defaultMaxValue = 10
    const locStorageStartValue = Number(localStorage.getItem('startValue')) || defaultStartValue
    const locStorageMaxValue = Number(localStorage.getItem('maxValue')) || defaultMaxValue

    const [counterValue, setCounterValue] = useState<number>(locStorageStartValue)

    const [error, setError] = useState(false)
    const [isValueSet, setIsValueSet] = useState(false)
    let incDisButton = counterValue >= locStorageMaxValue
    let resetDisButton = counterValue <= 0

    const increaseNumber = () => {
        setCounterValue(counterValue + 1)
    }

    const resetNumber = () => {
        setCounterValue(0)
    }

    const getSettingError = (settingError: boolean) => {
        setError(settingError)
    }
    console.log('render counter')
    return (
        <S.CounterWrapperStyle $direction={'row'} $gap={'10px'} $align={'center'}>

            <CounterSettings
                defaultStartValue={defaultStartValue}
                defaultMaxValue={defaultMaxValue}
                setIsValueSet={setIsValueSet}
                getSettingError={getSettingError}/>

            <CounterDisplay
                incButtonCondition={incDisButton}
                resetButtonCondition={resetDisButton}
                counterValue={counterValue}
                increaseNumber={increaseNumber}
                settingError={error}
                isValueSet={isValueSet}
                resetNumber={resetNumber}/>

        </S.CounterWrapperStyle>
    );
};