import React from 'react';
import style from './BtnSet.module.scss';

export type BtnSetType = {
    disBtn:boolean
    setValue: (valueMax:number,valueMin:number) => void
    valueMax: number
    valueMin: number
}

export function BtnSet(props:BtnSetType) {

    const setValue = ()=> {
        props.setValue(props.valueMax,props.valueMin)
    }
    return (
        <div className={style.btnSet}>
            <button
                onClick={setValue}
                disabled={props.disBtn}
            >Set</button>
        </div>
    )
}