type counterStateType = {
    countNum: number
    valueMax: number,
    valueMin: number,
    infoMessage: boolean,
    errorInfoMessage: boolean,
    errorInputMax: boolean,
    errorInputMin: boolean,
    disBtn: boolean,
};

let initialState: counterStateType = {
    countNum: 0,
    valueMax: 5,
    valueMin: 0,
    infoMessage: false,
    errorInfoMessage: false,
    errorInputMax: false,
    errorInputMin: false,
    disBtn: true,
}

export const counterReducer = (state: counterStateType = initialState, action: actionsType): counterStateType => {

    switch (action.type) {
        case "SET-VALUE-MIN": {
            return {...state, valueMin: action.valueMin}
        }
        case "SET-VALUE-MAX": {
            return {...state, valueMax: action.valueMax}
        }
        case "SET-COUNT-NUM": {
            return {...state, countNum: action.countNum}
        }
        case "SET-INFO-MESSAGE": {
            return {...state, infoMessage: action.infoMessage}
        }
        case "SET-ERROR-INFO-MESSAGE": {
            return {...state, errorInfoMessage: action.errorInfoMessage}
        }
        case "SET-ERROR-INPUT-MAX": {
            return {...state, errorInputMax: action.errorMax}
        }
        case "SET-ERROR-INPUT-MIN": {
            return {...state, errorInputMin: action.errorMin}
        }
        case "DISABLED-BTN": {
            return {...state, disBtn: action.disBtn}
        }
        default:
            return state;
    }

}

export const setValueMaxAC = (valueMax: number): setValueMaxACType => {
    return ({type: 'SET-VALUE-MAX', valueMax} as const)
}
export const setValueMinAC = (valueMin: number): setValueMinACType => {
    return ({type: 'SET-VALUE-MIN', valueMin} as const)
}
export const setCountNumAC = (countNum: number): setCountNumACType => {
    return ({type: 'SET-COUNT-NUM', countNum} as const)
}
export const setInfoMessageAC = (infoMessage: boolean): setInfoMessageACType => {
    return ({type: 'SET-INFO-MESSAGE', infoMessage} as const)
}
export const setErrorInfoMessageAC = (errorInfoMessage: boolean): setErrorInfoMessageACType => {
    return ({type: 'SET-ERROR-INFO-MESSAGE', errorInfoMessage} as const)
}
export const setErrorInputMaxAC = (errorMax: boolean): setErrorInputMaxACType => {
    return ({type: 'SET-ERROR-INPUT-MAX', errorMax} as const)
}
export const setErrorInputMinAC = (errorMin: boolean): setErrorInputMinACType => {
    return ({type: 'SET-ERROR-INPUT-MIN', errorMin} as const)
}
export const DisabledBtnAC = (disBtn: boolean): DisabledBtnACType => {
    return ({type: 'DISABLED-BTN', disBtn} as const)
}

type actionsType = setValueMaxACType
    | setValueMinACType
    | setCountNumACType
    | setInfoMessageACType
    | setErrorInfoMessageACType
    | setErrorInputMaxACType
    | setErrorInputMinACType
    | DisabledBtnACType


type setValueMaxACType = { type: 'SET-VALUE-MAX'; valueMax: number };
type setValueMinACType = { type: 'SET-VALUE-MIN'; valueMin: number }
type setCountNumACType = { type: 'SET-COUNT-NUM'; countNum: number }
type setInfoMessageACType = { type: 'SET-INFO-MESSAGE'; infoMessage: boolean }
type setErrorInfoMessageACType = { type: 'SET-ERROR-INFO-MESSAGE'; errorInfoMessage: boolean }
type setErrorInputMaxACType = { type: 'SET-ERROR-INPUT-MAX'; errorMax: boolean }
type setErrorInputMinACType = { type: 'SET-ERROR-INPUT-MIN'; errorMin: boolean }
type DisabledBtnACType = { type: 'DISABLED-BTN'; disBtn: boolean }