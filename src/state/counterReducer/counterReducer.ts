import {ChooseReducerActionType} from "../chooseReducer/chooseVersionReducer";

type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type SetMinCounterValueActionType = ReturnType<typeof setMinCounterValueAC>
type SetMaxCounterValueActionType = ReturnType<typeof setMaxCounterValueAC>
type SetIsValueSetActionType = ReturnType<typeof setIsValueSetAC>
export type CounterReducerActionType =
    IncreaseCounterActionType
    | ResetCounterActionType
    | SetMinCounterValueActionType
    | SetMaxCounterValueActionType
    | SetIsValueSetActionType
    | ChooseReducerActionType

export type CounterType = {
    startValue: number
    maxValue: number
    currentValue: number
    isValueSet: boolean
}

export const initialCounterState: CounterType = {
    startValue: 0,
    maxValue: 3,
    currentValue: 0,
    isValueSet: false
}

export const counterReducer = (state: CounterType = initialCounterState, action: CounterReducerActionType): CounterType => {
    switch (action.type) {
        case "INCREASE-COUNTER": {
            return {
                ...state,
                currentValue: state.currentValue + 1,
            }
        }
        case "RESET-COUNTER": {
            return {
                ...state,
                currentValue: state.startValue,
            }
        }
        case "SET-MIN-COUNTER-VALUE": {
            return {
                ...state,
                startValue: action.payload.value,
            }
        }
        case "SET-MAX-COUNTER-VALUE": {
            return {
                ...state,
                maxValue: action.payload.value,
            }
        }
        case "SET-IS-VALUE-SET-VALUE": {
            return {
                ...state,
                isValueSet: action.payload.isValueSet,
                currentValue: state.startValue,
            }
        }
        case "CHANGE-VERSION": {
            const {maxValue, ...rest} = initialCounterState
            return {
                ...state,
                ...rest
            }
        }
        default:
            return state
    }
}

export const increaseCounterAC = () => {
    return {type: 'INCREASE-COUNTER'} as const
}

export const resetCounterAC = () => {
    return {type: 'RESET-COUNTER'} as const
}

export const setMinCounterValueAC = (value: number) => {
    return {type: 'SET-MIN-COUNTER-VALUE', payload: {value}} as const
}

export const setMaxCounterValueAC = (value: number) => {
    return {type: 'SET-MAX-COUNTER-VALUE', payload: {value}} as const
}

export const setIsValueSetAC = (isValueSet: boolean) => {
    return {type: 'SET-IS-VALUE-SET-VALUE', payload: {isValueSet}} as const
}