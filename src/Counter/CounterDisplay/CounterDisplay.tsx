import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {NavLink} from 'react-router-dom';

type CounterDisplayPropsType = {
    incButtonCondition: boolean
    resetButtonCondition: boolean
    settingError: boolean
    isValueSet: boolean
    counterValue: number
    increaseNumber: () => void
    resetNumber: () => void
    setSettings: ()=>void
}

export const CounterDisplay = ({
                                   isValueSet,
                                   settingError,
                                   increaseNumber,
                                   resetNumber,
                                   counterValue,
                                   resetButtonCondition,
                                   incButtonCondition,
                                   setSettings
                               }: CounterDisplayPropsType) => {
    console.log(incButtonCondition)
    console.log(resetButtonCondition)
    console.log(settingError)
    console.log(!isValueSet)
    return (
        <S.CounterDisplayWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.NumWrapperStyle>
                <S.StyledH1
                    $color={incButtonCondition || settingError ? theme.color.error.font : theme.color.accent}>{settingError ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'}</S.StyledH1>
            </S.NumWrapperStyle>
            <S.ButtonWrapperStyle $justify={'space-around'}>
                <Button title={'inc'} onClick={increaseNumber}
                        isDisabled={incButtonCondition || settingError || !isValueSet}/>
                <Button title={'reset'} onClick={resetNumber}
                        isDisabled={resetButtonCondition || settingError || !isValueSet}/>
                <NavLink to={'/settings'}>
                    <Button title={'settings'} onClick={setSettings}/>
                </NavLink>
            </S.ButtonWrapperStyle>
        </S.CounterDisplayWrapperStyle>
    );
};