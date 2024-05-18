import React from 'react';
import {Counter} from "../Counter/Counter";
import {Button} from "../components/Button/Button";
import {S} from "./Choose_Style";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";


export const Choose = () => {
    const version = useSelector<AppRootStateType, VersionType>(state => state.chooseVersion.version)
    const dispatch = useDispatch()
    const changeVersionHandler = (version:VersionType) => {
        dispatch(changeVersionAC(version))
    }
    return (
        <S.CounterWrapperStyle $gap={'20px'} $justify={'center'} $align={'center'}>
            {version === ''
                ? <>
                    <Button onClick={() => changeVersionHandler(VersionType.V1)}>v1</Button>
                    <Button onClick={() => changeVersionHandler(VersionType.V2)}>v2</Button>
                </>
                : <Counter/>}
        </S.CounterWrapperStyle>
    );
};