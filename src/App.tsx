import React, {useEffect, useState} from 'react';
import './App.css';
import {BlockSetting} from "./Components/BlockSatting/BlockSetting";
import {Count} from "./Components/Count/Count";


function App() {

    let [valueMax, setValueMax] = useState(5);
    let [valueMin, setValueMin] = useState(0);

    let [countNum, setCountNum] = useState(0);

    let [editMessage, setEditMessage] = useState(false);

    let [errorEditMessage, setErrorEditMessage] = useState(false);
    let [errorMax, setErrorMax] = useState(false);
    let [errorMin, setErrorMin] = useState(false);
    let [disBtn, setDisBtn] = useState(true)


    useEffect(() => {
        if (valueMax != 5 || valueMin != 0) {
            setEditMessage(true)
            setDisBtn(false)
        }
        if ((valueMax === valueMin) || (valueMin < 0) || (valueMax < valueMin)) {
            setErrorEditMessage(true)
            setEditMessage(false)
            setDisBtn(true)
            if ((valueMin < 0) || (valueMax === valueMin)) {
                setErrorMin(true)
            } else {
                setErrorMin(false)
            }
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


    const setValue = (valueMax: number, valueMin: number) => {
        setCountNum(valueMin)
        setEditMessage(false)
        setDisBtn(true)
    };

    const incrCounter = () => {
        if (countNum < valueMax) {
            setCountNum(countNum + 1)
        }
    };
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


