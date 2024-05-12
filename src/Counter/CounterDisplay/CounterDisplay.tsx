import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {increaseCounterAC, resetCounterAC} from "../../state/counterReducer";

type CounterDisplayPropsType = {
    error: boolean
    isValueSet: boolean
    setSettings: () => void
    version:string
}

export const CounterDisplay = ({
                                   isValueSet,
                                   error,
                                   setSettings,
                                   version
                               }: CounterDisplayPropsType) => {
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const incButtonError = useSelector<AppRootStateType, boolean>(state => state.counter.incButtonError)
    const resetButtonError = useSelector<AppRootStateType, boolean>(state => state.counter.resetButtonError)
    const dispatch = useDispatch()
    const increaseNumber = () => {
        dispatch(increaseCounterAC())
    }

    const resetNumber = () => {
        dispatch(resetCounterAC())
    }
    return (
        <S.CounterDisplayWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <S.StyledH1
                    $color={incButtonError || error ? theme.color.error.font : theme.color.accent}>{error ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'}</S.StyledH1>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-around'}>
                <Button title={'inc'} onClick={increaseNumber}
                        isDisabled={incButtonError || error || !isValueSet}/>
                <Button title={'reset'} onClick={resetNumber}
                        isDisabled={resetButtonError || error || !isValueSet}/>
                {version === 'v2' || <Button title={'settings'} onClick={setSettings}/>}
            </S.ButtonWrapperStyle>
        </S.CounterDisplayWrapperStyle>
    );
};