import React, {ChangeEvent, useState} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";

type CounterSettingsPropsType = {
    defaultStartValue: number
    defaultMaxValue: number

    getSettingError: (error: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
    setChooseV: (ver: string) => void
    setCounterValue: (value: number) => void
}

export const CounterSettings = ({
                                    defaultStartValue,
                                    defaultMaxValue,
                                    setIsValueSet,
                                    getSettingError,
                                    setChooseV,
                                    setCounterValue
                                }: CounterSettingsPropsType) => {
    if (localStorage.getItem('maxValue') && localStorage.getItem('startValue')) {
        defaultStartValue = Number(localStorage.getItem('startValue'))
        defaultMaxValue = Number(localStorage.getItem('maxValue'))
    }

    const [startValueInput, setStartValueInput] = useState(defaultStartValue)
    const [startValueInputError, setStartValueInputError] = useState(false)

    const [maxValueInput, setMaxValueInput] = useState(defaultMaxValue)
    const [maxValueInputError, setMaxValueInputError] = useState(false)

    const [disSetButton, setDisSetButton] = useState(false)

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'maxValueInput') {
            if (Number(e.currentTarget.value) <= startValueInput) {
                setMaxValueInputError(true)
                getSettingError(true)
            } else {
                setMaxValueInputError(false)
                setStartValueInputError(false)
                getSettingError(false)
            }
            setMaxValueInput(parseInt(e.currentTarget.value))
        } else {
            if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValueInput) {
                setStartValueInputError(true)
                getSettingError(true)
            } else {
                setStartValueInputError(false)
                setMaxValueInputError(false)
                getSettingError(false)
            }
            setStartValueInput(Number(e.currentTarget.value))
            setCounterValue(Number(e.currentTarget.value))
        }
        setDisSetButton(false)
        setIsValueSet(false)
    }

    const setButtonHandler = () => {
        setDisSetButton(true)
        setIsValueSet(true)
        localStorage.setItem('maxValue', JSON.stringify(maxValueInput))
        localStorage.setItem('startValue', JSON.stringify(startValueInput))
    }

    const chooseButtonHandler = () => {
        setChooseV('')
    }

    return (
        <S.CounterSettingsWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.InputWrapperStyle>
                <FlexWrapper $justify={'space-between'}>
                    <span>max value</span>
                    <S.StyledInput $bgc={maxValueInputError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={maxValueInput}
                                   name={'maxValueInput'}/>
                </FlexWrapper>
                <FlexWrapper $justify={'space-between'}>
                    <span>start value</span>
                    <S.StyledInput $bgc={startValueInputError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={startValueInput}
                                   name={'startValueInput'}/>
                </FlexWrapper>
            </S.InputWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-between'}>
                <Button title={'set'} onClick={setButtonHandler}
                        isDisabled={maxValueInputError || startValueInputError || disSetButton}/>
                <Button title={'choose version'} onClick={chooseButtonHandler}/>
            </S.ButtonWrapperStyle>
        </S.CounterSettingsWrapperStyle>
    );
};