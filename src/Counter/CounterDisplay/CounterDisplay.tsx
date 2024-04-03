import React, {useState} from 'react';
import {S} from "../CounterStyle";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";

type CounterDisplayPropsType = {
    incButtonCondition: boolean
    resetButtonCondition:boolean
    settingError: boolean
    isValueSet: boolean
    counterValue:number
    increaseNumber: () => void
    resetNumber: () => void
}

export const CounterDisplay = ({isValueSet, settingError, increaseNumber, resetNumber, counterValue, resetButtonCondition, incButtonCondition}: CounterDisplayPropsType) => {
    console.log('render counter display')

    return (
        <S.CounterWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <S.StyledH1 $color={incButtonCondition ? theme.color.error.font : theme.color.accent}>{settingError ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'}</S.StyledH1>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $gap={'50px'}>
                <Button title={'inc'} onClick={increaseNumber} isDisabled={incButtonCondition || settingError || !isValueSet}/>
                <Button title={'reset'} onClick={resetNumber} isDisabled={resetButtonCondition || settingError || !isValueSet}/>
            </S.ButtonWrapperStyle>
        </S.CounterWrapperStyle>
    );
};