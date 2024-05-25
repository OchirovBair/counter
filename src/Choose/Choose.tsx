import React from 'react';
import {Counter} from "../Counter/Counter";
import {Button} from "../components/Button/Button";
import {S} from "./Choose_Style";
import {useDispatch} from "react-redux";
import {changeVersionAC, VersionType} from "../state/chooseReducer/chooseVersionReducer";
import {useAppSelector} from "../hooks/hooks";
import {versionSelectors} from "../state/selectors";


export const Choose = () => {
    const version = useAppSelector(versionSelectors.version)
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