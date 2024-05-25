import {AppRootStateType} from "./store";

export const startValue = (state: AppRootStateType) => state.counter.startValue
export const maxValue = (state: AppRootStateType) => state.counter.maxValue
export const currentValue = (state: AppRootStateType) => state.counter.currentValue
export const isValueSet = (state: AppRootStateType) => state.counter.isValueSet
export const version = (state: AppRootStateType) => state.chooseVersion.version

export const counterSelectors = {
    startValue,
    maxValue,
    currentValue,
    isValueSet
}
export const versionSelectors = {
    version
}