import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {S} from "./AppStyle";
import {CounterSettings} from "./Counter/CounterSettings/CounterSettings";

function App() {
    return (
        <S.AppStyle $align={'center'} $justify={'center'}>
            <Counter/>
            {/*<CounterSettings setIsValueSet={()=>{}}*/}
            {/*                 getSettingError={()=>{}}/>*/}
        </S.AppStyle>
    );
}

export default App;
