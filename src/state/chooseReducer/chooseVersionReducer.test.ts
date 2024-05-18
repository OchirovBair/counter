import {changeVersionAC, chooseVersionReducer, ChooseVersionType} from "./chooseVersionReducer";

let startState: ChooseVersionType

beforeEach(()=>{
    startState = {
        version: ''
    }
})
test('start value should be increased by 1', () => {
    const action = changeVersionAC("v1")
    const endState = chooseVersionReducer(startState, action)

    expect(endState.version).toBe('v1')
})
