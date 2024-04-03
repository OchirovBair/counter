import React, {ChangeEvent, useEffect, useState} from 'react';
import {S} from "../CounterStyle";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";

type CounterSettingsPropsType = {
    defaultStartValue: number
    defaultMaxValue: number

    getSettingError: (settingError: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
}

export const CounterSettings = ({defaultStartValue, defaultMaxValue, setIsValueSet, getSettingError}: CounterSettingsPropsType) => {
    let setButtonDis = false
    if (localStorage.getItem('maxValue') && localStorage.getItem('startValue')) {
        defaultStartValue = Number(localStorage.getItem('startValue'))
        defaultMaxValue = Number(localStorage.getItem('maxValue'))
    }

    const [startValueInput, setStartValueInput] = useState(defaultStartValue)
    const [maxValueInput, setMaxValueInput] = useState(defaultMaxValue)
    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueInput(Number(e.currentTarget.value))
    }

    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueInput(Number(e.currentTarget.value))
    }
    const setButtonHandler = () => {
        setIsValueSet(true)
        localStorage.setItem('maxValue', JSON.stringify(maxValueInput))
        localStorage.setItem('startValue', JSON.stringify(startValueInput))
        setButtonDis = true
    }

    const settingValueError = startValueInput < 0 || startValueInput >= maxValueInput

    useEffect(() => {
        getSettingError(settingValueError)
    }, [settingValueError]);
    console.log('render counter settings')

    return (
        <S.CounterWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <div>
                    <span>max value</span>
                    <S.StyledInput $bgc={settingValueError ? theme.color.error.font : 'white'} type="number"
                                   onChange={maxValueInputHandler} value={maxValueInput}/>
                </div>
                <div>
                    <span>start value</span>
                    <S.StyledInput $bgc={settingValueError ? theme.color.error.font : 'white'} type="number"
                                   onChange={startValueInputHandler} value={startValueInput}/>
                </div>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $gap={'50px'}>
                <Button title={'set'} onClick={setButtonHandler} isDisabled={settingValueError}/>
            </S.ButtonWrapperStyle>
        </S.CounterWrapperStyle>
    );
};