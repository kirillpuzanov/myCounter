import React from 'react';
import style from './Counter.module.scss';

type  CountType = {
    countNum: number
    valueMax: number
    valueMin: number
    infoMessage: boolean
    errorInfoMessage: boolean
}

export const Counter = (props: CountType) => {
    return (
        <div>
            <div className={style.count_wrapper}>
                {
                    props.infoMessage ? <span className={style.count_content}>Enter values and press"Set"</span>
                        : props.errorInfoMessage ?
                        <span className={`${style.count_content} ${style.count_content_red}`}>Incorrect value!</span> :
                        <span
                            className={props.countNum === props.valueMax ? `${style.count_content} ${style.count_content_red}` : style.count_content}>  {props.countNum}
                    </span>
                }
            </div>
        </div>
    )
}
