import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";

type CounterDisplayPropsType = {
    incButtonError: boolean
    resetButtonError: boolean
    settingError: boolean
    isValueSet: boolean
    counterValue: number
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: () => void
}

export const CounterDisplay = ({
                                   isValueSet,
                                   settingError,
                                   increaseNumber,
                                   resetNumber,
                                   counterValue,
                                   resetButtonError,
                                   incButtonError,
                                   setSettings
                               }: CounterDisplayPropsType) => {
    return (
        <S.CounterDisplayWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <S.StyledH1
                    $color={incButtonError || settingError ? theme.color.error.font : theme.color.accent}>{settingError ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'}</S.StyledH1>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-around'}>
                <Button title={'inc'} onClick={increaseNumber}
                        isDisabled={incButtonError || settingError || !isValueSet}/>
                <Button title={'reset'} onClick={resetNumber}
                        isDisabled={resetButtonError || settingError || !isValueSet}/>
                <Button title={'settings'} onClick={setSettings}/>
            </S.ButtonWrapperStyle>
        </S.CounterDisplayWrapperStyle>
    );
};