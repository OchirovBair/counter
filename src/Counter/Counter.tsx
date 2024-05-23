import React from 'react';
import {VersionType} from "../state/chooseReducer/chooseVersionReducer";
import {CounterV1} from "./CounterV1";
import {CounterV2} from "./CounterV2";
import {useAppSelector} from "../hooks/hooks";

type CounterReturnType = {
    [key:string] : JSX.Element
}
export const Counter = () => {
    const version = useAppSelector(state => state.chooseVersion.version)

    const counter:CounterReturnType = {
        [VersionType.V1]: <CounterV1/>,
        [VersionType.V2]: <CounterV2/>
    }

    return counter[version]
};


//1) Стоит ли выносить логику в отдельный редюсер? если да то как можно это сделать?
//2) когда идет выбор версии в редюсере счетчика как в кейсе на смену версии обнулить значения счетчика кроме макс значения
// 3) когда идет смена версий в редюсере счетчика payload в AC не используется. Это норма практика или нужно так писать чтобы объект создаваемый AC использовался весь?
// 4) лучше брять и прописывать каждый юсселектор на каждую переменную или взять весь стейст и через точечную нотацию обращатся? (см. CounterDisplay)
// 5) нормально ли брать перменные из старого стейта в редюсерах например state.startValue при RESET-COUNTER?


// поправить Button
// убрать логику дизейблов из стейта в компонет рядом с кнопками
// использовать для стейта версий enum
// переделать обратно на компоненты CounterV1, CounterV2 так как это расширяет на будущее добавление/расширение приложения
// по хорошему нужно CounterDisplay на каждую версию своя компонента из за будущего расширения приложения
// нужна обработка ввода дробных чисел - выкидывать ошибку должно










