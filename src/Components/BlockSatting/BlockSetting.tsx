import React from 'react';
import {BtnSet} from "./BtnSet/BtnSet";
import style from "./BlockSetting.module.scss";
import {Inputs} from "./Inputs/Inputs";


type PropsType = {
    disBtn:boolean
    valueMax: number
    valueMin: number
    setValueMax: (value: number) => void
    setValueMin: (value: number) => void
    errorMin: boolean
    errorMax: boolean
    setValue: (valueMax: number, valueMin: number) => void
}

export function BlockSetting(props: PropsType) {

    return (
        <div className={style.WindowInput}>
            <Inputs
                valueMax={props.valueMax}
                valueMin={props.valueMin}
                setValueMax={props.setValueMax}
                setValueMin={props.setValueMin}
                errorMin={props.errorMin}
                errorMax={props.errorMax}
            />
            <BtnSet
                disBtn={props.disBtn}
                setValue={props.setValue}
                valueMax={props.valueMax}
                valueMin={props.valueMin}
            />
        </div>
    )
}