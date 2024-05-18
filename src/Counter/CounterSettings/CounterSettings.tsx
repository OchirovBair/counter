import React, {ChangeEvent} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    setIsValueSetAC,
    setMaxCounterValueAC,
    setMinCounterValueAC
} from "../../state/counterReducer/counterReducer";
import {changeVersionAC} from "../../state/chooseReducer/chooseVersionReducer";

export const CounterSettings = () => {
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const startValueError = useSelector<AppRootStateType, boolean>(state => state.counter.startValueError)

    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const maxValueError = useSelector<AppRootStateType, boolean>(state => state.counter.maxValueError)

    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)

    const dispatch = useDispatch()


    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'maxValueInput') {
            dispatch(setMaxCounterValueAC(parseInt(e.currentTarget.value)))
        } else {
            dispatch(setMinCounterValueAC(parseInt(e.currentTarget.value)))
        }
        // setDisSetButton(false)
        dispatch(setIsValueSetAC(false))
    }

    const setButtonHandler = () => {
        // setDisSetButton(true)
        dispatch(setIsValueSetAC(!isValueSet))
    }

    const chooseButtonHandler = () => {
        dispatch(changeVersionAC(''))
    }

    const disableButtonBooleanLogic = maxValueError || startValueError || isValueSet

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
                        isDisabled={disableButtonBooleanLogic}/>
                <Button title={'choose version'} onClick={chooseButtonHandler}/>
            </S.ButtonWrapperStyle>
        </S.CounterSettingsWrapperStyle>
    );
};