import {
    counterReducer,
    CounterType,
    increaseCounterAC,
    resetCounterAC,
    setMaxCounterValueAC,
    setMinCounterValueAC
} from "./counterReducer";

let startState: CounterType

beforeEach(()=>{
    startState = {
        startValue: 0,
        startValueError: false,
        maxValue: 3,
        maxValueError: false,

        currentValue: 0,
        incButtonError: false,
        resetButtonError: true,
    }
})
test('start value should be increased by 1', () => {
    const action = increaseCounterAC()
    const endState = counterReducer(startState, action)

    expect(endState.currentValue).toBe(startState.currentValue + 1)
})

test('start value should be reset to 0', () => {
    const action = resetCounterAC()
    const endState = counterReducer(startState, action)

    expect(endState.currentValue).toBe(0)
})


test('if currentValue to be maxValue, incButtonError should be true and resetButtonError should be false', () => {
    const action = increaseCounterAC()
    let endState = startState
    while (endState.maxValue > endState.currentValue) {
        endState = counterReducer(endState, action)
    }

    expect(endState.incButtonError).toBeTruthy()
    expect(endState.resetButtonError).toBeFalsy()
})

test('if somebody reset counter, then incButtonError should be false and resetButtonError should be true', () => {
    const action = resetCounterAC()
    let endState = counterReducer(startState, action)

    expect(endState.incButtonError).toBeFalsy()
    expect(endState.resetButtonError).toBeTruthy()
})

test('if somebody set correct max value counter, then maxValue should number which is set and maxValueError should be false', () => {
    const maxNum = 10
    const action = setMaxCounterValueAC(maxNum)
    let endState = counterReducer(startState, action)

    expect(endState.maxValue).toBe(maxNum)
})

test('if somebody set correct start value counter, then startValue should number which is set and startValueError should be false', () => {
    const startNum = 4
    const action = setMinCounterValueAC(startNum)
    let endState = counterReducer(startState, action)

    expect(endState.currentValue).toBe(startNum)
    expect(endState.startValue).toBe(startNum)
})

test('if somebody set incorrect max value counter, then maxValue should number which is set and maxValueError should be true', () => {
    const maxNum = 0
    const action = setMaxCounterValueAC(maxNum)
    let endState = counterReducer(startState, action)

    expect(endState.maxValueError).toBeTruthy()
})

test('if somebody set incorrect start value counter, then startValue should number which is set and startValueError should be true', () => {
    const startNum = 3
    const action = setMinCounterValueAC(startNum)
    let endState = counterReducer(startState, action)

    expect(endState.startValueError).toBeTruthy()
})

