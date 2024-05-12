import React, {ChangeEvent, useState} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setMaxCounterValueAC, setMinCounterValueAC} from "../../state/counterReducer";

type CounterSettingsPropsType = {
    getSettingError: (error: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
    setChooseV: (ver: string) => void
}

export const CounterSettings = ({
                                    setIsValueSet,
                                    getSettingError,
                                    setChooseV,
                                }: CounterSettingsPropsType) => {
    const dispatch = useDispatch()
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const startValueError = useSelector<AppRootStateType, boolean>(state => state.counter.startValueError)

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const maxValueError = useSelector<AppRootStateType, boolean>(state => state.counter.maxValueError)
    // const [startValueInput, setStartValueInput] = useState(startValue)
    // const [startValueInputError, setStartValueInputError] = useState(false)
    //
    // const [maxValueInput, setMaxValueInput] = useState(maxValue)
    // const [maxValueInputError, setMaxValueInputError] = useState(false)

    const [disSetButton, setDisSetButton] = useState(false)

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'maxValueInput') {
            if (Number(e.currentTarget.value) <= startValue) {
                getSettingError(true)
            } else {
                getSettingError(false)
            }
            dispatch(setMaxCounterValueAC(parseInt(e.currentTarget.value)))
        } else {
            if (Number(e.currentTarget.value) < 0 || Number(e.currentTarget.value) >= maxValue) {
                getSettingError(true)
            } else {
                getSettingError(false)
            }
            dispatch(setMinCounterValueAC(parseInt(e.currentTarget.value)))
        }
        setDisSetButton(false)
        setIsValueSet(false)
    }

    const setButtonHandler = () => {
        setDisSetButton(true)
        setIsValueSet(true)
        // localStorage.setItem('maxValue', JSON.stringify(maxValueInput))
        // localStorage.setItem('startValue', JSON.stringify(startValueInput))
        // setDefaultStartValue(startValueInput)
        // setDefaultMaxValue(maxValueInput)
    }

    const chooseButtonHandler = () => {
        setChooseV('')
    }

    return (
        <S.CounterSettingsWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.InputWrapperStyle>
                <FlexWrapper $justify={'space-between'}>
                    <span>max value</span>
                    <S.StyledInput $bgc={maxValueError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={maxValue}
                                   name={'maxValueInput'}/>
                </FlexWrapper>
                <FlexWrapper $justify={'space-between'}>
                    <span>start value</span>
                    <S.StyledInput $bgc={startValueError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={startValue}
                                   name={'startValueInput'}/>
                </FlexWrapper>
            </S.InputWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-between'}>
                <Button title={'set'} onClick={setButtonHandler}
                        isDisabled={maxValueError || startValueError || disSetButton}/>
                <Button title={'choose version'} onClick={chooseButtonHandler}/>
            </S.ButtonWrapperStyle>
        </S.CounterSettingsWrapperStyle>
    );
};