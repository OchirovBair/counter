import React, {ChangeEvent} from 'react';
import {S} from "./CounterSettings_Style";
import {theme} from "../../styles/theme";
import {Button} from "../../components/Button/Button";
import {FlexWrapper} from "../../components/FlexWrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {setIsValueSetAC, setMaxCounterValueAC, setMinCounterValueAC} from "../../state/counterReducer/counterReducer";
import {changeVersionAC, VersionType} from "../../state/chooseReducer/chooseVersionReducer";
import {getValidationRules} from "../../helpers/getValidationRules";

export const CounterSettings = () => {
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const counterValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)

    let {isStartValueInputError, isMaxValueInputError, ...rest} = getValidationRules(startValue, maxValue, counterValue)

    const isValueSet = useSelector<AppRootStateType, boolean>(state => state.counter.isValueSet)

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