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
    startValueError: boolean
    maxValue: number
    maxValueError: boolean
    currentValue: number
    incButtonError: boolean
    resetButtonError: boolean
    isValueSet: boolean
}

export const initialCounterState: CounterType = {
    startValue: 0,
    startValueError: false,
    maxValue: 3,
    maxValueError: false,

    currentValue: 0,

    incButtonError: false,
    resetButtonError: true,

    isValueSet: false
}

export const counterReducer = (state: CounterType = initialCounterState, action: CounterReducerActionType): CounterType => {
    switch (action.type) {
        case "INCREASE-COUNTER":
            return {
                ...state,
                currentValue: state.currentValue + 1,
                incButtonError: state.currentValue + 1 === state.maxValue,
                resetButtonError: false
            }
        case "RESET-COUNTER":
            return {
                ...state,
                currentValue: state.startValue,
                incButtonError: false,
                resetButtonError: true}
        case "SET-MIN-COUNTER-VALUE":
            return {
                ...state,
                startValue: action.payload.value,
                currentValue: action.payload.value,
                startValueError: false,
                maxValueError: action.payload.value < 0 || action.payload.value >= state.maxValue
            }
        case "SET-MAX-COUNTER-VALUE":
            return {
                ...state,
                maxValue: action.payload.value,
                maxValueError: false,
                startValueError: state.startValue >= action.payload.value
            }
        case "SET-IS-VALUE-SET-VALUE":
            return {
                ...state,
                isValueSet: action.payload.isValueSet,
                currentValue: state.startValue
            }
        case "CHANGE-VERSION":
            return {
                ...state,
                startValue: 0,
                startValueError: false,
                maxValueError: false,
                currentValue: 0,
                incButtonError: false,
                resetButtonError: true,
                isValueSet: false
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