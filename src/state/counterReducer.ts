type IncreaseCounterActionType = ReturnType<typeof increaseCounterAC>
type ResetCounterActionType = ReturnType<typeof resetCounterAC>
type SetMinCounterValueActionType = ReturnType<typeof setMinCounterValueAC>
type SetMaxCounterValueActionType = ReturnType<typeof setMaxCounterValueAC>
type CounterReducerActionType = IncreaseCounterActionType | ResetCounterActionType | SetMinCounterValueActionType | SetMaxCounterValueActionType

export type CounterType = {
    startValue: number
    startValueError: boolean
    maxValue: number
    maxValueError: boolean
    currentValue: number
    incButtonError: boolean
    resetButtonError: boolean
}

const initialCounterValue:CounterType = {
    startValue: 0,
    startValueError: false,
    maxValue: 3,
    maxValueError: false,

    currentValue: 0,

    incButtonError: false,
    resetButtonError: true,
}

export const counterReducer = (state = initialCounterValue, action: CounterReducerActionType):CounterType => {
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
            if (action.payload < 0 || action.payload >= state.maxValue) {
                return {...state, startValue: action.payload, currentValue: action.payload, startValueError: true}
            } else {
                return {...state, startValue: action.payload, currentValue: action.payload, startValueError: false}
            }
        case "SET-MAX-COUNTER-VALUE":
            if (state.startValue >= action.payload) {
                return {...state, maxValue: action.payload, maxValueError: true}
            } else {
                return {...state, maxValue: action.payload, maxValueError: false}
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
    return {type: 'SET-MIN-COUNTER-VALUE', payload: value} as const
}

export const setMaxCounterValueAC = (value: number) => {
    return {type: 'SET-MAX-COUNTER-VALUE', payload: value} as const
}