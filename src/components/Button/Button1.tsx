// import React, {ComponentPropsWithoutRef} from 'react';
// import { S } from './ButtonStyle';
// import {isDisabled} from "@testing-library/user-event/dist/utils";
//
// type ButtonPropsType = {
//     title: string
//     onClick?: ()=>void
//     isDisabled?:boolean
// } & ComponentPropsWithoutRef<'button'>
//
// export const Button = ({onClick = ()=>{}, title, isDisabled = false}: ButtonPropsType) => {
//
// // debugger
//     return (
//         <S.ButtonStyle onClick={onClick} disabled={isDisabled} $isDisabled={isDisabled}>{title}</S.ButtonStyle>
//     );
// };
//
// // выкидывать сразу ButtonStyle, а обертку Button убрать