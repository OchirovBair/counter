import React from 'react';
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterSettings} from "./CounterSettings/CounterSettings";

type CounterV1PropsType = {
    isValueSet: boolean
    setSettings: () => void
    getSettingError: (error: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
    setChooseV: (ver: string) => void
    error: boolean
    version: string
}

export const CounterV1 = ({
                              isValueSet,
                              setIsValueSet,
                              getSettingError,
                              setChooseV,
                              setSettings,
                              error,
                              version,
                          }: CounterV1PropsType) => {
    return (
        <>
            {isValueSet
                ? <CounterDisplay
                    error={error}
                    isValueSet={isValueSet}
                    setSettings={setSettings}
                    version={version}/>
                : <CounterSettings
                    setIsValueSet={setIsValueSet}
                    getSettingError={getSettingError}
                    setChooseV={setChooseV}/>}
        </>
    );
};