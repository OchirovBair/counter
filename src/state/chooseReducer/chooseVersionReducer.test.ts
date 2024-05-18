import {changeVersionAC, chooseVersionReducer, ChooseVersionType, VersionType} from "./chooseVersionReducer";

let startState: ChooseVersionType

beforeEach(()=>{
    startState = {
        version: VersionType.NONE
    }
})
test('start value should be increased by 1', () => {
    const action = changeVersionAC(VersionType.V1)
    const endState = chooseVersionReducer(startState, action)

    expect(endState.version).toBe('v1')
})
