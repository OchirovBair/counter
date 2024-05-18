import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {increaseCounterAC, resetCounterAC, setIsValueSetAC} from "../../state/counterReducer/counterReducer";
import {VersionType} from "../../state/chooseReducer/chooseVersionReducer";
import {getValidationRules} from "../../helpers/getValidationRules";

export const CounterDisplay = () => {
        const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
        const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
        const counterValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
        const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)
        const version = useSelector<AppRootStateType, VersionType>(state => state.chooseVersion.version)

        const {isStartValueInputError, isMaxValueInputError, isIncButtonDisabled, isResetButtonDisabled} = getValidationRules(startValue, maxValue, counterValue)


        const dispatch = useDispatch()

        const increaseNumber = () => {
            dispatch(increaseCounterAC())
        }

        const resetNumber = () => {
            dispatch(resetCounterAC())
        }

        const setSettings = () => {
            dispatch(setIsValueSetAC(false))
        }

        const h1Color = isMaxValueInputError || isStartValueInputError || isIncButtonDisabled ? theme.color.error.font : theme.color.accent
        const h1Text = isMaxValueInputError || isStartValueInputError ? 'Incorrect value' : isValueSet ? counterValue : 'Set value'

        return (
            <S.CounterDisplayWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
                <S.NumWrapperStyle>
                    <S.StyledH1 $color={h1Color}>
                        {h1Text}
                    </S.StyledH1>
                </S.NumWrapperStyle>
                <S.ButtonWrapperStyle $justify={'space-around'}>
                    <Button onClick={increaseNumber} disabled={isIncButtonDisabled || !isValueSet}>inc</Button>
                    <Button onClick={resetNumber} disabled={isResetButtonDisabled || !isValueSet}>reset</Button>
                    {version === VersionType.V2 || <Button onClick={setSettings}>settings</Button>}
                </S.ButtonWrapperStyle>
            </S.CounterDisplayWrapperStyle>
        );
    }
;