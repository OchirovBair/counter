import React, {useState} from 'react';
import {CounterV1} from "./CounterV1";
import {CounterV2} from "./CounterV2";

type CounterPropsType = {
    version: string
    setChooseV: (ver: string) => void
}

export const Counter = ({version, setChooseV}: CounterPropsType) => {
    const [error, setError] = useState(false)
    const [isValueSet, setIsValueSet] = useState(false)

    const setSettings = () => {
        setIsValueSet(false)
    }

    const getSettingError = (settingError: boolean) => {
        setError(settingError)
    }

    return (
        version === 'v1'
            ? (<CounterV1
            setIsValueSet={setIsValueSet}
            getSettingError={getSettingError}
            setChooseV={setChooseV}
            error={error}
            isValueSet={isValueSet}
            setSettings={setSettings}
            version={version}
        />)
        : (<CounterV2
            setIsValueSet={setIsValueSet}
            getSettingError={getSettingError}
            setChooseV={setChooseV}
            error={error}
            isValueSet={isValueSet}
            setSettings={setSettings}
            version={version}
        />)
    )
};