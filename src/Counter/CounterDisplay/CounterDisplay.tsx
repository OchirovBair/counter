import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {increaseCounterAC, resetCounterAC, setIsValueSetAC} from "../../state/counterReducer/counterReducer";
import {VersionType} from "../../state/chooseReducer/chooseVersionReducer";

export const CounterDisplay = () => {
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const incButtonError = useSelector<AppRootStateType, boolean>(state => state.counter.incButtonError)
    const resetButtonError = useSelector<AppRootStateType, boolean>(state => state.counter.resetButtonError)
    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)
    const maxValueError = useSelector<AppRootStateType, boolean>(state => state.counter.maxValueError)
    const startValueError = useSelector<AppRootStateType, boolean>(state => state.counter.startValueError)
    const version = useSelector<AppRootStateType, VersionType>(state => state.chooseVersion.version)

    const dispatch = useDispatch()

    const increaseNumber = () => {
        dispatch(increaseCounterAC())
    }

    const resetNumber = () => {
        dispatch(resetCounterAC())
    }

    const setSettings = () => {
        dispatch(setIsValueSetAC(!isValueSet))
    }

    const h1ColorLogic = maxValueError || startValueError || incButtonError ? theme.color.error.font : theme.color.accent
    const h1TextLogic = maxValueError || startValueError ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'

    return (
        <S.CounterDisplayWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <S.StyledH1 $color={h1ColorLogic}>
                    {h1TextLogic}
                </S.StyledH1>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-around'}>
                <Button title={'inc'} onClick={increaseNumber}
                        isDisabled={incButtonError  || !isValueSet}/>
                <Button title={'reset'} onClick={resetNumber}
                        isDisabled={resetButtonError  || !isValueSet}/>
                {version === 'v2' || <Button title={'settings'} onClick={setSettings}/>}
            </S.ButtonWrapperStyle>
        </S.CounterDisplayWrapperStyle>
    );
};