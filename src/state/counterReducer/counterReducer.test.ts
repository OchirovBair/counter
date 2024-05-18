import {
    counterReducer,
    CounterType,
    increaseCounterAC,
    resetCounterAC, setIsValueSetAC,
    setMaxCounterValueAC,
    setMinCounterValueAC
} from "./counterReducer";

let startState: CounterType

beforeEach(()=>{
    startState = {
        startValue: 0,
        maxValue: 3,
        currentValue: 0,
        isValueSet: false
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


test('if something set opposite isValueSet, then isValueSet should be !isValueSet', () => {
    const action = setIsValueSetAC(true)
    let endState = counterReducer(startState, action)

    expect(endState.isValueSet).toBe(!startState.isValueSet)
})
