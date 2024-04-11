import React, {useState} from 'react';
import {Counter} from "../Counter/Counter";
import {Button} from "../components/Button/Button";
import {S} from "./Choose_Style";

type ChoosePropsType = {}

export const Choose = ({}: ChoosePropsType) => {
    const [chooseV, setChooseV] = useState('')
    const chooseHandler = (version: string) => {
        setChooseV(version)
    }

    return (
        <S.CounterWrapperStyle $gap={'20px'} $justify={'center'} $align={'center'}>
            {chooseV === ''
                ? <>
                    <Button title={'v1'} onClick={() => chooseHandler('v1')}/>
                    <Button title={'v2'} onClick={() => chooseHandler('v2')}/>
                </>
                : <Counter version={chooseV} setChooseV={setChooseV}/>}
        </S.CounterWrapperStyle>
    );
};