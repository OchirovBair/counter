import React, {ChangeEvent, useEffect, useState} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {NavLink} from "react-router-dom";

type CounterSettingsPropsType = {
    defaultStartValue: number
    defaultMaxValue: number

    getSettingError: (settingError: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
}

export const CounterSettings = ({
                                    defaultStartValue,
                                    defaultMaxValue,
                                    setIsValueSet,
                                    getSettingError
                                }: CounterSettingsPropsType) => {
    if (localStorage.getItem('maxValue') && localStorage.getItem('startValue')) {
        defaultStartValue = Number(localStorage.getItem('startValue'))
        defaultMaxValue = Number(localStorage.getItem('maxValue'))
    }

    const [startValueInput, setStartValueInput] = useState(defaultStartValue)
    const [maxValueInput, setMaxValueInput] = useState(defaultMaxValue)
    const [disSetButton, setDisSetButton] = useState(false)
    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueInput(parseInt(e.currentTarget.value))
        setDisSetButton(false)
        setIsValueSet(false)
    }

    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueInput(Number(e.currentTarget.value))
        setDisSetButton(false)
        setIsValueSet(false)
    }
    const setButtonHandler = () => {
        setDisSetButton(true)
        setIsValueSet(true)
        localStorage.setItem('maxValue', JSON.stringify(maxValueInput))
        localStorage.setItem('startValue', JSON.stringify(startValueInput))
    }

    const settingValueError = startValueInput < 0 || startValueInput >= maxValueInput

    useEffect(() => {
        getSettingError(settingValueError)
    }, [settingValueError]);

    return (
        <S.CounterSettingsWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.InputWrapperStyle>
                <FlexWrapper $justify={'space-between'}>
                    <span>max value</span>
                    <S.StyledInput $bgc={settingValueError ? theme.color.error.font : 'white'} type="number"
                                   onChange={maxValueInputHandler} value={maxValueInput}/>
                </FlexWrapper>
                <FlexWrapper $justify={'space-between'}>
                    <span>start value</span>
                    <S.StyledInput $bgc={settingValueError ? theme.color.error.font : 'white'} type="number"
                                   onChange={startValueInputHandler} value={startValueInput}/>
                </FlexWrapper>
            </S.InputWrapperStyle>
            <S.ButtonWrapperStyle $gap={'50px'} $justify={'center'}>
                <NavLink to={'/display'}>
                    <Button title={'set'} onClick={setButtonHandler} isDisabled={settingValueError || disSetButton}/>
                </NavLink>
            </S.ButtonWrapperStyle>
        </S.CounterSettingsWrapperStyle>
    );
};