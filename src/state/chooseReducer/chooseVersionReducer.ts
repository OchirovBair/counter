
export enum VersionType {
    V1='v1',
    V2='v2',
    NONE=''
}
// export type VersionType =  '' | 'v1' | 'v2'
export type ChooseVersionType =  {
    version: VersionType
}

const initialState:ChooseVersionType = {
    version: VersionType.NONE
}

export type ChooseReducerActionType = ReturnType<typeof changeVersionAC>
export const chooseVersionReducer = (state = initialState, action: ChooseReducerActionType):ChooseVersionType => {
    switch (action.type) {
        case "CHANGE-VERSION":
            return {...state, version: action.payload.version}
        default:
            return state
    }
}

export const changeVersionAC = (version: VersionType) => {
    return {type: 'CHANGE-VERSION', payload: {version}} as const
}