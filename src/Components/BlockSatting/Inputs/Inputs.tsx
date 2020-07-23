import React, {ChangeEvent} from 'react';
import style from './Inputs.module.scss';


type InputsType = {
    valueMax: number
    valueMin: number
    setValueMax: (value: number) => void
    setValueMin: (value: number) => void
    errorMax: boolean
    errorMin: boolean
}

export function Inputs(props: InputsType) {


    const changeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueMax(Number(e.currentTarget.value))
    }
    const changeInputMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValueMin(Number(e.currentTarget.value))
    }

    return (
        <div className={style.inputs_wrapper}>
            <div className={style.inputs_descr}>
                <span>max value: </span>
                <span>min value: </span>
            </div>
            <div>
                <input
                    className={props.errorMax ? `${style.input} ${style.red}` : style.input}
                    value={props.valueMax}
                    type={'number'}
                    onChange={changeInputMax}
                />
                <input className={props.errorMin ? `${style.input} ${style.red}` : style.input}
                       value={props.valueMin}
                       onChange={changeInputMin}
                       type="number"/>
            </div>
        </div>
    )
}

