import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";

type CounterDisplayPropsType = {
    incButtonError: boolean
    resetButtonError: boolean
    error: boolean
    isValueSet: boolean
    counterValue: number
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: () => void
    version:string
}

export const CounterDisplay = ({
                                   isValueSet,
                                   error,
                                   increaseNumber,
                                   resetNumber,
                                   counterValue,
                                   resetButtonError,
                                   incButtonError,
                                   setSettings,
                                   version
                               }: CounterDisplayPropsType) => {
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