type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type SetMinCounterValueActionType = ReturnType<typeof setMinCounterValueAC>
type SetMaxCounterValueActionType = ReturnType<typeof setMaxCounterValueAC>
type SetErrorActionType = ReturnType<typeof setErrorAC>
type SetIsValueSetActionType = ReturnType<typeof setIsValueSetAC>
export type CounterReducerActionType =
    IncreaseCounterActionType
    | ResetCounterActionType
    | SetMinCounterValueActionType
    | SetMaxCounterValueActionType
    | SetErrorActionType
    | SetIsValueSetActionType

export type CounterType = {
    startValue: number
    startValueError: boolean
    maxValue: number
    maxValueError: boolean
    currentValue: number
    incButtonError: boolean
    resetButtonError: boolean
    error: boolean
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

    error: false,
    isValueSet: false
}

export const counterReducer = (state: CounterType = initialCounterState, action: CounterReducerActionType): CounterType => {
    switch (action.type) {
        case "INCREASE-COUNTER":
            if (state.currentValue + 1 === state.maxValue) {
                return {...state, currentValue: state.currentValue + 1, incButtonError: true, resetButtonError: false}
            } else {
                return {...state, currentValue: state.currentValue + 1, resetButtonError: false}
            }
        case "RESET-COUNTER":
            return {...state, currentValue: state.startValue, incButtonError: false, resetButtonError: true}
        case "SET-MIN-COUNTER-VALUE":
            if (action.payload.value < 0 || action.payload.value >= state.maxValue) {
                return {...state, startValue: action.payload.value, currentValue: action.payload.value, startValueError: true}
            } else {
                return {...state, startValue: action.payload.value, currentValue: action.payload.value, startValueError: false}
            }
        case "SET-MAX-COUNTER-VALUE":
            if (state.startValue >= action.payload.value) {
                return {...state, maxValue: action.payload.value, maxValueError: true}
            } else {
                return {...state, maxValue: action.payload.value, maxValueError: false}
            }
        case "SET-ERROR-VALUE":
            return {...state, error: action.payload.error}
        case "SET-IS-VALUE-SET-VALUE":
            return {...state, isValueSet: action.payload.isValueSet}
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

export const setErrorAC = (error: boolean) => {
    return {type: 'SET-ERROR-VALUE', payload: {error}} as const
}
export const setIsValueSetAC = (isValueSet: boolean) => {
    return {type: 'SET-IS-VALUE-SET-VALUE', payload: {isValueSet}} as const
}