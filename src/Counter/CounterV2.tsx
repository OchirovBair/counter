import React from 'react';
import {CounterSettings} from "./CounterSettings/CounterSettings";
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";

type CounterV2PropsType = {
    isValueSet: boolean
    setSettings: () => void
    getSettingError: (error: boolean) => void
    setIsValueSet: (IsValueSet: boolean) => void
    setChooseV: (ver: string) => void
    error: boolean
    version: string
}

export const CounterV2 = ({
                              isValueSet,
                              setIsValueSet,
                              getSettingError,
                              setChooseV,
                              setSettings,
                              error,
                              version,
                          }: CounterV2PropsType) => {
    return (
        <>
            <CounterSettings
                setIsValueSet={setIsValueSet}
                getSettingError={getSettingError}
                setChooseV={setChooseV}/>
            <CounterDisplay
                error={error}
                isValueSet={isValueSet}
                setSettings={setSettings}
                version={version}/>
        </>
    );
};