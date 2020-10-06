import React from 'react';
import {Counter} from './Counter/Counter';
import {BtnCount} from './BtnCount/BtnCount';
import style from './Count.module.scss';

type CountType = {
    valueMax: number
    valueMin: number
    incrCounter: () => void
    resCounter: () => void
    countNum: number
    errorInfoMessage: boolean
    infoMessage: boolean
}

export function Count(props: CountType) {

    return (
        <div className={style.windowCount}>
            <Counter countNum={props.countNum}
                     valueMin={props.valueMin}
                     valueMax={props.valueMax}
                     infoMessage={props.infoMessage}
                     errorInfoMessage={props.errorInfoMessage}
            />
            <div className={style.windowCount_inner}>
                <BtnCount
                    onClickHandler={props.incrCounter}
                    name={'Inc'}
                    infoMessage={props.infoMessage}
                    errorInfoMessage={props.errorInfoMessage}
                />
                <BtnCount
                    name={'Reset'}
                    onClickHandler={props.resCounter}
                    infoMessage={props.infoMessage}
                    errorInfoMessage={props.errorInfoMessage}
                /></div>
        </div>
    )
}
