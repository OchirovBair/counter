import React, {ChangeEvent} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {useDispatch} from "react-redux";
import {setIsValueSetAC, setMaxCounterValueAC, setMinCounterValueAC} from "../../state/counterReducer/counterReducer";
import {getValidationRules} from "../../helpers/getValidationRules";
import {useAppSelector} from "../../hooks/hooks";
import {counterSelectors} from "../../state/selectors";

export const CounterSettings = () => {
    const startValue = useAppSelector(counterSelectors.startValue)
    const maxValue = useAppSelector(counterSelectors.maxValue)
    const counterValue = useAppSelector(counterSelectors.currentValue)
    const isValueSet = useAppSelector(counterSelectors.isValueSet)

    let {isStartValueInputError, isMaxValueInputError, ...rest} = getValidationRules(startValue, maxValue, counterValue)

    const dispatch = useDispatch()

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.name === 'maxValueInput') {
            dispatch(setMaxCounterValueAC(parseInt(e.currentTarget.value)))
        } else {
            dispatch(setMinCounterValueAC(parseInt(e.currentTarget.value)))
        }
        dispatch(setIsValueSetAC(false))
    }

    const setButtonHandler = () => {
        dispatch(setIsValueSetAC(true))
    }



    const isButtonDisabled = isMaxValueInputError || isStartValueInputError || isValueSet

    return (
        <S.CounterSettingsWrapperStyle $direction={'column'} $gap={'10px'} $align={'center'}>
            <S.InputWrapperStyle>
                <FlexWrapper $justify={'space-between'}>
                    <span>max value</span>
                    <S.StyledInput $bgc={isMaxValueInputError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={maxValue}
                                   name={'maxValueInput'}/>
                </FlexWrapper>
                <FlexWrapper $justify={'space-between'}>
                    <span>start value</span>
                    <S.StyledInput $bgc={isStartValueInputError ? theme.color.error.font : 'white'}
                                   type="number"
                                   onChange={inputValueHandler}
                                   value={startValue}
                                   name={'startValueInput'}/>
                </FlexWrapper>
            </S.InputWrapperStyle>
            <S.ButtonWrapperStyle $justify={'center'}>
                <Button onClick={setButtonHandler} disabled={isButtonDisabled}>set values</Button>
            </S.ButtonWrapperStyle>
        </S.CounterSettingsWrapperStyle>
    );
};