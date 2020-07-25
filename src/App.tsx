import React, {useEffect, useState} from 'react';
import './App.css';
import {BlockSetting} from "./Components/BlockSatting/BlockSetting";
import {Count} from "./Components/Count/Count";


function App() {

    //переменные для функции restoreState
    let lSValueMax: number = 0;
    let lSValueMin: number = 0;

    type StateType = {
        max: number
        min: number
    }
// Функция сохранения value из  inputs  в lS
    function saveState(key: string, state: StateType) {
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

// Функция восстановления value  из lS/ проверка на наличие в lS данных
    function restoreState(key: string) {
        const stateAsString = localStorage.getItem(key);
        if (stateAsString !== null) {
            let defaultState = JSON.parse(stateAsString)
            lSValueMax = defaultState.max
            lSValueMin = defaultState.min
            return {lSValueMax, lSValueMin}
        }
    }
    restoreState('test')

// изменение Value в инпутах окно настроек
    let [valueMax, setValueMax] = useState(lSValueMax || 5  );
    let [valueMin, setValueMin] = useState(lSValueMin || 0  );
// число  в счетчике
    let [countNum, setCountNum] = useState(0);

// сообщение на экране счетчика о вводе значений
    let [editMessage, setEditMessage] = useState(false);

// сообщение на экране счетчика о вводе не корректных значений
    let [errorEditMessage, setErrorEditMessage] = useState(false);

    //   ошибка отдельно для инпутаMax
    let [errorMax, setErrorMax] = useState(false);
    //   ошибка отдельно для инпутаMin
    let [errorMin, setErrorMin] = useState(false);

    // активность кнопки SET в окне настроек
    let [disBtn, setDisBtn] = useState(true)


    useEffect(() => {
        //для активации окна настроек
        if (valueMax != 5 || valueMin != 0) {
            setEditMessage(true)
            setDisBtn(false)
        }
        // проверки на ввод не кооректных значений в инпут ( общие )
        if ((valueMax === valueMin) || (valueMin < 0) || (valueMax < valueMin)) {
            setErrorEditMessage(true)
            setEditMessage(false)
            setDisBtn(true)
            // проверки на ввод не кооректных значений в конкретный инпут
            if ((valueMin < 0) || (valueMax === valueMin)) {
                setErrorMin(true)
            } else {
                setErrorMin(false)
            }
            // проверки на ввод не кооректных значений в конкретный инпут
            if ((valueMax < valueMin) || (valueMax === valueMin)) {
                setErrorMax(true)
            } else {
                setErrorMax(false)
            }
        } else {
            setErrorMax(false)
            setErrorMin(false)
            setErrorEditMessage(false)
        }
    }, [valueMax, valueMin]);

//применяем стартовые значения счетчика, скрываем информационные сообщения,выключаем кнопку set
    const setValue = (valueMax: number, valueMin: number) => {
        setCountNum(valueMin)
        setEditMessage(false)
        setDisBtn(true)
        saveState('test', {max: valueMax, min: valueMin})
    };
//Увеличение счетчика на 1 прикаждом клике на кнопку inc
    const incrCounter = () => {
        if (countNum < valueMax) setCountNum(countNum + 1)
    };
    // сброс счетчика к стартовому значению
    const resCounter = () => setCountNum(valueMin);




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
                errorEditMessage={errorEditMessage}
                editMessage={editMessage}
            />
        </div>
    );
}

export default App;


