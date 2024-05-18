import React, {useState} from 'react';
import {Counter} from "../Counter/Counter";
import {Button} from "../components/Button/Button";
import {S} from "./Choose_Style";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";

type ChoosePropsType = {}

export const Choose = ({}: ChoosePropsType) => {
    const version = useSelector<AppRootStateType, VersionType>(state => state.chooseVersion.version)
    const dispatch = useDispatch()

    return (
        <S.CounterWrapperStyle $gap={'20px'} $justify={'center'} $align={'center'}>
            {version === ''
                ? <>
                    <Button title={'v1'} onClick={() => dispatch(changeVersionAC('v1'))}/>
                    <Button title={'v2'} onClick={() => dispatch(changeVersionAC('v2'))}/>
                </>
                : <Counter/>}
        </S.CounterWrapperStyle>
    );
};