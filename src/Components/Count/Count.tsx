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
    errorEditMessage: boolean
    editMessage: boolean
}

export function Count(props: CountType) {

    return (
        <div className={style.windowCount}>
            <Counter countNum={props.countNum}
                     valueMin={props.valueMin}
                     valueMax={props.valueMax}
                     editMessage={props.editMessage}
                     errorEditMessage={props.errorEditMessage}
            />
            <div className={style.windowCount_inner}>
                <BtnCount
                    onClickHandler={props.incrCounter}
                    name={'Inc'}
                    editMessage={props.editMessage}
                    errorEditMessage={props.errorEditMessage}
                />
                <BtnCount
                    name={'Reset'}
                    onClickHandler={props.resCounter}
                    editMessage={props.editMessage}
                    errorEditMessage={props.errorEditMessage}
                /></div>
        </div>
    )
}

//