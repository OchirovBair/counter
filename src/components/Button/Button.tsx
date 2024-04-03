import React from 'react';
import { S } from './ButtonStyle';
import {isDisabled} from "@testing-library/user-event/dist/utils";

type ButtonPropsType = {
    title: string
    onClick: ()=>void
    isDisabled:boolean
}

export const Button = ({onClick, title, isDisabled}: ButtonPropsType) => {
    const onClickHandler = () => {
        onClick()
    }
// debugger
    return (
        <S.ButtonStyle onClick={onClickHandler} disabled={isDisabled} $isDisabled={isDisabled}>{title}</S.ButtonStyle>
    );
};