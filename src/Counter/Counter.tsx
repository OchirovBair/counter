import React, {useEffect, useState} from 'react';
import {S} from "./Counter_Style";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from './CounterSettings/CounterSettings';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Error} from "./Error/Error";

type CounterPropsType = {}

export const Counter = ({}: CounterPropsType) => {
    const defaultStartValue = 0
    const defaultMaxValue = 3
    const locStorageStartValue = Number(localStorage.getItem('startValue')) || defaultStartValue
    const locStorageMaxValue = Number(localStorage.getItem('maxValue')) || defaultMaxValue

    const [counterValue, setCounterValue] = useState<number>(locStorageStartValue)
    const [error, setError] = useState(false)
    const [isValueSet, setIsValueSet] = useState(false)

    let incDisButton = counterValue >= locStorageMaxValue
    let resetDisButton = counterValue <= locStorageStartValue

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


    useEffect(() => {
        setCounterValue(locStorageStartValue)
    }, [locStorageStartValue])

    return (
        <S.CounterWrapperStyle $gap={'20px'} $justify={'center'} $align={'center'}>
            <Routes>
                <Route path={'/'} element={<Navigate to={'/settings'}/>}/>

                <Route path={'/settings'} element={
                    <CounterSettings
                        defaultStartValue={defaultStartValue}
                        defaultMaxValue={defaultMaxValue}
                        setIsValueSet={setIsValueSet}
                        getSettingError={getSettingError}/>}/>


                <Route path={'/display'} element={
                    <CounterDisplay
                        incButtonCondition={incDisButton}
                        resetButtonCondition={resetDisButton}
                        counterValue={counterValue}
                        increaseNumber={increaseNumber}
                        settingError={error}
                        isValueSet={isValueSet}
                        setSettings={setSettings}
                        resetNumber={resetNumber}/>
                }/>

                <Route path={'/*'} element={<Error/>}/>
            </Routes>
            {/*<CounterSettings*/}
            {/*    defaultStartValue={defaultStartValue}*/}
            {/*    defaultMaxValue={defaultMaxValue}*/}
            {/*    setIsValueSet={setIsValueSet}*/}
            {/*    getSettingError={getSettingError}/>*/}
            {/*<CounterDisplay*/}
            {/*    incButtonCondition={incDisButton}*/}
            {/*    resetButtonCondition={resetDisButton}*/}
            {/*    counterValue={counterValue}*/}
            {/*    increaseNumber={increaseNumber}*/}
            {/*    settingError={error}*/}
            {/*    isValueSet={isValueSet}*/}
            {/*    setSettings={setSettings}*/}
            {/*    resetNumber={resetNumber}/>*/}
        </S.CounterWrapperStyle>
    );
};

