import React, {useEffect} from 'react';
import './App.css';
import {BlockSetting} from "./Components/BlockSatting/BlockSetting";
import {Count} from "./Components/Count/Count";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {
    DisabledBtnAC, setCountNumAC,
    setErrorInfoMessageAC,
    setErrorInputMaxAC,
    setErrorInputMinAC,
    setInfoMessageAC, setValueMaxAC, setValueMinAC
} from "./state/CounterReducer";


type StateForLsType = { max: number, min: number };

function AppWithRedux() {

    const dispatch = useDispatch();
    const valueMax = useSelector<AppRootStateType, number>(state => state.counter.valueMax);
    const valueMin = useSelector<AppRootStateType, number>(state => state.counter.valueMin);
    const countNum = useSelector<AppRootStateType, number>(state => state.counter.countNum);
    const infoMessage = useSelector<AppRootStateType, boolean>(state => state.counter.infoMessage);
    const errorInfoMessage = useSelector<AppRootStateType, boolean>(state => state.counter.errorInfoMessage);
    const errorMax = useSelector<AppRootStateType, boolean>(state => state.counter.errorInputMax);
    const errorMin = useSelector<AppRootStateType, boolean>(state => state.counter.errorInputMin);
    const disBtn = useSelector<AppRootStateType, boolean>(state => state.counter.disBtn);


// Функция сохранения value из  inputs  в lS
    function setValueToLS(key: string, state: StateForLsType) {
        const valueLS = JSON.stringify(state);
        localStorage.setItem(key, valueLS)
    }

    // Функции по установке инициализационных и стартовых значений в окне настроек
    const setValueMax = (valueMax: number) => dispatch(setValueMaxAC(valueMax))
    const setValueMin = (valueMin: number) => dispatch(setValueMinAC(valueMin))

// Функция восстановления value  из lS/ проверка на наличие в lS данных
    useEffect(() => {
        function restoreState(key: string) {
            const valueLS = localStorage.getItem(key);
            if (valueLS !== null) {
                let defaultState = JSON.parse(valueLS)
                setValueMax(defaultState.max)
                setValueMin(defaultState.min)
            }
        }

        restoreState('test')
    }, [localStorage.getItem('test')])


    useEffect(() => {
        //для активации окна настроек
        if (valueMax !== 5 || valueMin !== 0) {
            dispatch(setInfoMessageAC(true))
            dispatch(DisabledBtnAC(false))
        }
        // проверки на ввод не кооректных значений в инпут ( общие )
        if ((valueMax === valueMin) || (valueMin < 0) || (valueMax < valueMin)) {
            dispatch(setErrorInfoMessageAC(true))
            dispatch(setInfoMessageAC(false))
            dispatch(DisabledBtnAC(true))
        }
        // проверки на ввод не коректных значений в конкретный инпут Min
        if ((valueMin < 0) || (valueMax === valueMin)) {
            dispatch(setErrorInputMinAC(true))
        } else {
            dispatch(setErrorInputMinAC(false))
        }
        // проверки на ввод не коректных значений в конкретный инпут Max
        if ((valueMax < valueMin) || (valueMax === valueMin)) {
            dispatch(setErrorInputMaxAC(true))
        } else {
            dispatch(setErrorInputMaxAC(false))
        }
    }, [valueMax, valueMin]);


//применяем стартовые значения счетчика, скрываем информационные сообщения,выключаем кнопку set
    const setValue = (valueMax: number, valueMin: number) => {
        dispatch(setCountNumAC(valueMin))
        dispatch(setInfoMessageAC(false))
        errorInfoMessage && dispatch(setErrorInfoMessageAC(false))
        dispatch(DisabledBtnAC(true))
        setValueToLS('test', {max: valueMax, min: valueMin})
    };
//Увеличение счетчика на 1 прикаждом клике на кнопку inc
    const incrCounter = () => {
        if (countNum < valueMax) dispatch(setCountNumAC(countNum + 1))
    };
    // сброс счетчика к стартовому значению
    const resCounter = () => dispatch(setCountNumAC(valueMin));


    return (
        <div className="App">
            <BlockSetting
                valueMax={valueMax}
                valueMin={valueMin}
                setValueMax={setValueMax}
                setValueMin={setValueMin}
                errorMax={errorMax}
                errorMin={errorMin}
                setValue={setValue}
                disBtn={disBtn}
            />
            <Count
                valueMax={valueMax}
                valueMin={valueMin}
                incrCounter={incrCounter}
                resCounter={resCounter}
                countNum={countNum}
                errorInfoMessage={errorInfoMessage}
                infoMessage={infoMessage}
            />
        </div>
    );
}

export default AppWithRedux;