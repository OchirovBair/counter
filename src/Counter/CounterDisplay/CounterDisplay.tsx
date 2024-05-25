import React from 'react';
import {S} from "./CounterDisplay_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {increaseCounterAC, resetCounterAC, setIsValueSetAC} from "../../state/counterReducer/counterReducer";
import {VersionType} from "../../state/chooseReducer/chooseVersionReducer";
import {getValidationRules} from "../../helpers/getValidationRules";
import {useAppSelector} from "../../hooks/hooks";
import {counterSelectors, versionSelectors} from "../../state/selectors";


export const CounterDisplay = () => {
        const startValue = useAppSelector(counterSelectors.startValue)
        const maxValue = useAppSelector(counterSelectors.maxValue)
        const counterValue = useAppSelector(counterSelectors.currentValue)
        const isValueSet = useAppSelector(counterSelectors.isValueSet)
        const version = useAppSelector(versionSelectors.version)

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